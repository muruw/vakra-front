import React, { Component } from 'react';
import { BookingCreation } from '../BookingCreation';
import { HouseSelect } from '../shared/HouseSelect';
import { VisitorsSelect } from '../shared/VisitorsSelect';
import { DatesSelectShort } from './DatesSelectShort';
import { Booking } from '../model/BookingTypes';

type State = typeof initialState;

const initialState = Object.freeze({
  houseNumber: 0 as number,
  numberOfVisitors: 0 as number,
  startDate: new Date() as Date,
  endDate: new Date() as Date
})

export class BookingShort extends Component<any, State> {

  readonly state = initialState;
  bookingCreation: BookingCreation = new BookingCreation();

  handleNumberOfVisitorsChange(event: any): void {
    this.setState({ numberOfVisitors: event.target.value });
  }

  handleStartDateChange(date: Date): void {
    this.setState({ startDate: date });
  }

  handleEndDateChange = (date: Date) => {
    this.setState({ endDate: date });
  }

  handleHouseNumberChange = (event: any) => {
    this.setState({ houseNumber: event.target.value });
  }

  createBooking = async () => {
    const booking: Booking = {
      houseNumber: this.state.houseNumber,
      numberOfVisitors: this.state.numberOfVisitors,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    await this.bookingCreation.createBooking(booking);
  }

  render() {
    return (
      <div>
        <HouseSelect />
        <VisitorsSelect setNumberOfVisitorsState={(e: any) => this.handleNumberOfVisitorsChange(e)}
                        numberOfVisitors={this.state.numberOfVisitors} />
        <p>Start date</p>
        <DatesSelectShort setDateState={(d: Date) => this.handleStartDateChange(d)}
                          date={this.state.startDate} />
        <p>End date</p>
        <DatesSelectShort setDateState={(d: Date) => this.handleEndDateChange(d)}
                          date={this.state.endDate} />
        <button onClick={this.createBooking}>Post booking</button>
      </div>
    );
  }
}
