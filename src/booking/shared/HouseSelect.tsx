import React, { Component } from 'react';
import { House } from '../model/BookingTypes';
import HouseApi from '../../api/HouseApi';
import { BookingCreation } from '../BookingCreation';

export interface HouseSelectProps {
  bookingCreation: BookingCreation;
}

export interface HouseSelectState {
  houses: any
}

export class HouseSelect extends Component<HouseSelectProps, HouseSelectState> {

  private bookingCreation: BookingCreation;

  constructor(props: any) {
    super(props);
    this.state = {
      houses: []
    }
    this.bookingCreation = this.props.bookingCreation;
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