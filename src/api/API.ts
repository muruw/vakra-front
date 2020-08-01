import Strapi from 'strapi-sdk-javascript';
import { LoginResource } from '../containers/AuthPage/LoginResource';

class API {

  // TODO hide url in env file
  private strapi: any;

  constructor() {
    this.strapi = new Strapi('http://localhost:1337');
    this.strapi.login('testadmin', 'admin123');
  }

  public get(contentType: string) {
    return this.strapi.getEntries(contentType);
  }

  public post(contentTypePluralized: string, data?: any) {
    return this.strapi.createEntry(contentTypePluralized, data);
  }

  public login(lr: LoginResource) {
    return this.strapi.login(lr.identifier, lr.password);
  }
}

export default new API();