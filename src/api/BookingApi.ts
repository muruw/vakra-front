import API from './API';
import { Booking } from '../booking/model/BookingTypes';

export class BookingApi {
  static postBooking(booking: Booking): Promise<any> {
    return API.post('bookings', {
      houseNumber: booking.houseNumber,
      numberOfVisitors: booking.numberOfVisitors,
      startDate: booking.startDate,
      endDate: booking.endDate
    })
  }
}