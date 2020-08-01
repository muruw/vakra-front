import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

export interface DatesSelectShortProps {
  setDateState: any,
  date: Date
}

export class DatesSelectShort extends Component<DatesSelectShortProps, any> {

  render() {
    return (
      <div>
        <DatePicker onChange={this.props.setDateState} value={this.props.date} />
      </div>
    );
  }
}