// app.tsx
import React, { useEffect, useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import { logDOM } from '@testing-library/react';
import SighUp from './views/SighUp';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <SighUp />
    </div>
  );
}

export default App;