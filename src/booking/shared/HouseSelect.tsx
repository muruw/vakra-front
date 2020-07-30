import React, { Component } from 'react';
import { House } from '../model/BookingTypes';
import HouseApi from '../../api/HouseApi';

type State = typeof initialState;

const initialState = Object.freeze({
  houses: []
})

export class HouseSelect extends Component<{}, State> {

  readonly state = initialState;

  componentDidMount() {
    this.loadHouses();
  }

  loadHouses = async () => {
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