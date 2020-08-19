import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout'
import {AppProvider} from './utils/AppContext'


function App() {

  return (
    <AppProvider>
      <div className="App">
        <Layout />
      </div>
    </AppProvider>
  );
}

export default App;
