import API from './API';
import { LoginResource } from '../containers/AuthPage/LoginResource';

export class AuthenticationApi {
  static login(lr: LoginResource): Promise<any> {
    return API.login(lr);
  }
}