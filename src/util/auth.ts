export default class Auth {
  static isAuthenticated: boolean = false;

  static authenticate(cb: any) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  }
  static signout(cb: any) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}