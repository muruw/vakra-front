import React, { Component } from 'react';
import { BookingCreation } from '../BookingCreation';
import { HouseSelect } from '../shared/HouseSelect';
import { VisitorsSelect } from '../shared/VisitorsSelect';
import { DatesSelectShort } from './DatesSelectShort';

export interface BookingProps {
  bookingCreation: BookingCreation
}


export class BookingShort extends Component<BookingProps, any> {

  private readonly bookingCreation: BookingCreation;

  constructor(props: any) {
    super(props);
    this.bookingCreation = this.props.bookingCreation;
  }

  render() {
    return (
      <div>
        <HouseSelect bookingCreation={this.bookingCreation}/>
        <VisitorsSelect bookingCreation={this.bookingCreation}/>
        <DatesSelectShort/>
      </div>
    );
  }
}
