import React from 'react';
import styled from 'styled-components'
import {FaChevronDown} from 'react-icons/fa'

const HeroContainer = styled.div`
    height: 100vh;
    background-color: #1B998B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 140px;
    border: 4px solid #2E294E;
    border-radius: 8px;
    font-size: 1em;
    padding: 0.25em 1em;
    background-color: transparent;
    font-family: Inconsolata;
`

const Hero = (props) => {
    return (

        <HeroContainer>
            <h1>I'm Josh Bangle</h1>
            <h3>Professional Front End Web Dev.</h3>
            <Button onClick={() => props.focus()}>Click to see more<FaChevronDown size={80}/></Button>
        </HeroContainer>

    );
}

export default Hero;
