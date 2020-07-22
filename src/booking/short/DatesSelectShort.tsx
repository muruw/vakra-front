import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

export interface DatesSelectShortState {
}

export class DatesSelectShort extends Component<any, DatesSelectShortState> {

  private dateObjects = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <div>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={date => date && setStartDate(date)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.dateObjects}
      </div>
    );
  }

}