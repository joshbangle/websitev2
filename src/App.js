import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Skillset from './components/Skillset/Skillset'
import Projects from './components/Projects/Projects'
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
