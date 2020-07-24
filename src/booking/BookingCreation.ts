import { Booking, House } from './model/BookingTypes';
import { BookingApi } from '../api/BookingApi';

export class BookingCreation {

  private selectedHouse: House = {};
  private _selectedAmountOfVisitors: number = 0;
  private selectedStartDate: Date = new Date();
  private selectedEndDate: Date = new Date();

  public setSelectedHouse(house: House) {
    this.selectedHouse = house;
  }

  public setSelectedAmountOfVisitors(amount: number) {
    this._selectedAmountOfVisitors = amount;
  }

  public setSelectedStartDate(startDate: Date) {
    this.selectedStartDate = startDate;
  }

  public setSelectedEndDate(endDate: Date) {
    this.selectedEndDate = endDate;
  }

  public get selectedAmountOfVisitors(): number {
    return this._selectedAmountOfVisitors;
  }

  public createBooking = () => {
    const booking : Booking = {
      endDate: this.selectedEndDate,
      houseNumber: this.selectedHouse.houseNumber,
      numberOfVisitors: this._selectedAmountOfVisitors,
      startDate: this.selectedStartDate
    }

    BookingApi.postBooking(booking);
  }

}