import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { userReducer } from './Controllers/redux';
import { expertpitch }from './Controllers/redux';
import  {savedids}  from './Controllers/redux';
import { savedpitches,yourpitches,expertcomment,expertreport,GenEvent,LEEDEvent } from './Controllers/redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
reducer:{
  pitch:userReducer,
  expertpitch:expertpitch,
  saved:savedids,
  savedpitch:savedpitches,
  yourpitch:yourpitches,
  expertcomment:expertcomment,
  expertreport:expertreport,
  generalevents:GenEvent,
  LEEDevents:LEEDEvent
}
})
root.render(
  <>
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
  </>
);

reportWebVitals();
