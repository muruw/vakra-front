import { Booking } from './model/BookingTypes';
import { BookingApi } from '../api/BookingApi';

export class BookingCreation {

  public createBooking = async (b: Booking) => {
    await BookingApi.postBooking(b);
  }
}