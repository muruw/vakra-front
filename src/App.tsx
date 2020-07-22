import React from 'react';
import { BookingShort } from './booking/short/BookingShort';
import { BookingCreation } from './booking/BookingCreation';

function App() {
  return (
    <>
      <BookingShort bookingCreation={new BookingCreation()}/>
    </>
  );
}

export default App;
