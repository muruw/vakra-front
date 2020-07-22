import React from 'react';
import './App.css';
import { BookingShort } from './booking/short/BookingShort';
import { BookingCreation } from './booking/BookingCreation';

function App() {
  return (
    <div>
      <BookingShort bookingCreation={new BookingCreation()}/>
    </div>
  );
}

export default App;
