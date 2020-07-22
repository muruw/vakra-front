import API from './API';

export default class HouseApi {
  public static getAllHouses(): Promise<any> {
    return API.get('houses');
  }
}