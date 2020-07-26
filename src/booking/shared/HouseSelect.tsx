import React, { Component } from 'react';
import { House } from '../model/BookingTypes';
import HouseApi from '../../api/HouseApi';

export interface HouseSelectState {
  houses: any
}

export class HouseSelect extends Component<any, HouseSelectState> {

  constructor(props: any) {
    super(props);
    this.state = {
      houses: []
    }
  }

  async componentDidMount() {
    const allHouses = await HouseApi.getAllHouses();
    this.setState({ houses: allHouses });
  }

  render() {
    return (
      <div>
        <select>
          {this.state.houses.map((house: House) => {
            return <option value={house.houseNumber}>{house.houseName}</option>
          })}
        </select>
      </div>
    )
  }

}