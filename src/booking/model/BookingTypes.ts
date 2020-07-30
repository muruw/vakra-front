export interface House {
  houseName?: string,
  houseNumber?: number,
  capacity?: number,
  pricePerNight?: number,
  multiplier?: number
}

export interface Booking {
  houseNumber?: number,
  numberOfVisitors?: number,
  startDate?: Date,
  endDate?: Date
}