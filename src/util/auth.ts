import { LoginResource } from '../containers/AuthPage/LoginResource';
import { AuthenticationApi } from '../api/AuthenticationApi';

export default class Auth {
  static isAuthenticated: boolean = false;
  static wrongCredentialsInserted: boolean = false;

  static async login(lr: LoginResource, cb: any): Promise<any> {
    const response = await AuthenticationApi.login(lr)
      .catch(() => {
        this.isAuthenticated = false;
        this.wrongCredentialsInserted = true;
      })
    if (response !== null) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
      debugger;
    }
    console.log(response);

    return response;
  }

  static signout(cb: any) {
    this.isAuthenticated = false
    this.wrongCredentialsInserted = false;
    setTimeout(cb, 100) // fake async
  }
}