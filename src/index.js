import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore,combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import userReducer from './Models/user'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import {ProSidebarProvider} from 'react-pro-sidebar'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  
 
<ProSidebarProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ProSidebarProvider>
 


 
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
