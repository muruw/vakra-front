import Strapi from 'strapi-sdk-javascript';

class API {

  // TODO hide url in env file
  private strapi = new Strapi('http://localhost:1337');

  public get(contentType: string) {
    return this.strapi.getEntries(contentType);
  }

  public post(contentTypePluralized: string, data?: any) {
    return this.strapi.createEntry(contentTypePluralized, data);
  }
  // TODO add delete, put
}

export default new API();