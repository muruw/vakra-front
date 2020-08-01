import React, { Component } from 'react';
import { BookingShort } from '../../booking/short/BookingShort';

type Props = typeof defaultProps
type State = typeof initialState

const defaultProps = Object.freeze({})
const initialState = Object.freeze({})

export default class AdminPanel extends Component<Props, State> {
  readonly state = initialState;

  render() {
    return (
      <div>
        <BookingShort/>
      </div>
    )
  }
}