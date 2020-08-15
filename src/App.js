import React from 'react';
import './App.scss';
import styled from 'styled-components'
import Layout from './components/Layout/Layout'

const ContentArea = styled.div`
  display: block;
  width: 100%;
`

function App() {
  
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
