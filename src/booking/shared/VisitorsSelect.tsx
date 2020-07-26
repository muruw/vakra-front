import React, { Component } from 'react';

export interface defaultProps {
  setNumberOfVisitorsState: any,
  numberOfVisitors: number
}

export class VisitorsSelect extends Component<defaultProps, any>{

  render() {
    return (
      <div>
        <select value={this.props.numberOfVisitors} onChange={this.props.setNumberOfVisitorsState}>
          {[...Array(10)].map((e, i) => {
            return <option value={i + 1}>{i + 1}</option>
          })}
        </select>
      </div>
    )}
}