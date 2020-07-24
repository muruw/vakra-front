import API from './API';
import { Booking } from '../booking/model/BookingTypes';

export class BookingApi {
  public static postBooking(booking: Booking) : void {
    API.post('/bookings', {
      houseNumber: booking.houseNumber,
      numberOfVisitors: booking.numberOfVisitors,
      startDate: booking.startDate,
      endDate: booking.endDate
    })
  }
}