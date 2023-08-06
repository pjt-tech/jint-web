// app.tsx
import React, { useEffect, useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import { logDOM } from '@testing-library/react';

function App() {
  const [connection, setConnect] = useState<string>('');

  const connectionTest = () => {
    axios.get('https://port-0-jint-web-app-ac2nlkv8q7cq.sel4.cloudtype.app/').then((response) => {
      setConnect(response.data);
    }).catch((error) => {
      setConnect(error.message);
    })
  }

  useEffect ( () => {
    connectionTest();
  }, []);

  
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{connection}</p>
      </header>
    </div>
  );
}

export default App;