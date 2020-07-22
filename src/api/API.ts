import Strapi from 'strapi-sdk-javascript';

class API {

  // TODO hide url in env file
  private strapi = new Strapi('http://localhost:1337');

  public get(contentType: string) {
    return this.strapi.getEntries(contentType);
  }
  // TODO add delete, put, post
}

export default new API();