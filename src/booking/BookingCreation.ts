import { House } from './model/BookingTypes';

export class BookingCreation {

  private selectedHouse: House = {};
  private _selectedAmountOfVisitors: number = 0;
  private selectedStartDate: string = "";
  private selectedEndDate: string = "";

  public setSelectedHouse(house: House) {
    this.selectedHouse = house;
  }

  public setSelectedAmountOfVisitors(amount: number) {
    this._selectedAmountOfVisitors = amount;
  }

  public setSelectedStartDate(startDate: string) {
    this.selectedStartDate = startDate;
  }

  public setSelectedEndDate(endDate: string) {
    this.selectedEndDate = endDate;
  }

  public get selectedAmountOfVisitors(): number {
    return this._selectedAmountOfVisitors;
  }

  public createBooking() {
    // TODO post booking into BE
  }

}