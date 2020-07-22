import React, { Component } from 'react';
import { BookingCreation } from '../BookingCreation';

export interface VisitorsSelectProps {
  bookingCreation: BookingCreation,
  amountOfVisitors?: number
}

export interface VisitorsSelectState {
  amountOfVisitors: any
}

export class VisitorsSelect extends Component<VisitorsSelectProps, VisitorsSelectState>{

  private bookingCreation: BookingCreation;

  constructor(props: any) {
    super(props);
    this.state = {
      amountOfVisitors: 0
    }
    this.bookingCreation = this.props.bookingCreation;
  }

  changeAmountOfVisitors = (event: any) => {
    this.setState({amountOfVisitors: event.target.value})
    this.bookingCreation.setSelectedAmountOfVisitors(this.state.amountOfVisitors);
  }

  render() {
    return (
      <div>
        <select value={this.state.amountOfVisitors} onChange={this.changeAmountOfVisitors}>
          {[...Array(10)].map((e, i) => {
            return <option value={i + 1}>{i + 1}</option>
          })}
        </select>
      </div>
    )}
}