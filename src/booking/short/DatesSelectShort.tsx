import React, { Component } from 'react';
import DatePicker from 'react-date-picker'
import { DateType } from '../../util/UtilTypes';
import { BookingCreation } from '../BookingCreation';

export interface DatesSelectShortProps {
  dateType: DateType,
  bookingCreation: BookingCreation
}

export interface DatesSelectShortState {
  date: Date
}

export class DatesSelectShort extends Component<DatesSelectShortProps, DatesSelectShortState> {

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  private onDateChange = (date: any) => {
    this.setState({ date })
    this.setDate();
  }

  private setDate = () => {
    (this.props.dateType === DateType.START_DATE) ?
      this.props.bookingCreation.setSelectedStartDate(this.state.date) :
      this.props.bookingCreation.setSelectedEndDate(this.state.date);
  }

  render() {
    return (
      <div>
        <DatePicker onChange={this.onDateChange} value={this.state.date} />
      </div>
    );
  }

}