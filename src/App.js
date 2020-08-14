import React from 'react';
import './App.scss';
import SideNav from './components/SideNav/SideNav'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'


import Skillset from './components/Skillset/Skillset'

function App() {

  const Vl = styled(animated.div)`
    border-left: 2px solid black;
    height: 70vh;
    margin-right: 32px;
  `
  const spring = useSpring({
    from: {
      transform: 'scaleY(0.2)'
    },
    to: {
      transform: 'scaleY(1)'
    },
    config: {
      friction: 46
    }
  })
  
  return (
    <div className="App">
        <SideNav />
        <Vl style={{...spring}}/>
      <div className="content">
        <Skillset />

      </div>
    </div>

  );
}

export default App;
