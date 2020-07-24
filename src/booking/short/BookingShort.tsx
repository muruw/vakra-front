import React, { Component } from 'react';
import { BookingCreation } from '../BookingCreation';
import { HouseSelect } from '../shared/HouseSelect';
import { VisitorsSelect } from '../shared/VisitorsSelect';
import { DatesSelectShort } from './DatesSelectShort';
import { DateType } from '../../util/UtilTypes';

export class BookingShort extends Component<any, any> {

  private bookingCreation: BookingCreation;

  constructor(props: any) {
    super(props);
    this.bookingCreation = new BookingCreation();
  }

  render() {
    return (
      <div>
        <HouseSelect bookingCreation={this.bookingCreation} />
        <VisitorsSelect bookingCreation={this.bookingCreation} />
        <p>Start date</p>
        <DatesSelectShort bookingCreation={this.bookingCreation}
                          dateType={DateType.START_DATE} />
        <p>End date</p>
        <DatesSelectShort bookingCreation={this.bookingCreation}
                          dateType={DateType.END_DATE} />
        <button onClick={this.bookingCreation.createBooking}>Post booking</button>
      </div>
    );
  }
}
