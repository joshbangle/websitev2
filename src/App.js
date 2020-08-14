import React from 'react';
import './App.scss';
import SideNav from './components/SideNav/SideNav'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Projects from './components/Projects/Projects'
import Hero from './components/Hero/Hero'



import Skillset from './components/Skillset/Skillset'

  const Vl = styled(animated.div)`
    border-left: 2px solid black;
    height: 70vh;
    margin-right: 32px;
  `

  const PostHero = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;
    height: 100vh;
    background-color: #eee;
  `

function App() {

  const [, setY] = useSpring(()=> ({ y: 0}))
  const handleFocus = () => {
    setY({
      y: window.innerHeight,
      reset: true,
      from: { y: window.scrollY },
      onFrame: props => window.scroll(window.innerHeight, props.y)
    })
  }

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
      <Hero focus={()=> handleFocus()}/>
      <PostHero>
        <SideNav/>
        <Vl style={{...spring}}/>
        <div className="content">
          <Skillset />
        </div>
      </PostHero>
      
    </div>
  );
}

export default App;
