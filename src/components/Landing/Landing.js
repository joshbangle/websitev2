import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'


const Hero = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #CCCCCC;
    z-index: 5000;
`
const ImageContainer = styled.div`
    background-image: url('smaller.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 400px;
    box-shadow: inset 0px 0px 6px 14px #CCCCCC;
`
const Img = styled.img`
    position: relative;
    height: 100%;
    z-index: 19;
`

const EnterButton = styled.button`
    text-align: center;
    width: 150px;
    height: 50px;
    background: #FFF;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.3em;
`


export default function Landing() {
    const [spring, set, stop] = useSpring(() => ({
        opacity: 1,
        transform: 'translateY(0px)'
    }))

    return (
        <Hero style={spring}>
            <ImageContainer className='imgContainer' />
            
            <EnterButton onClick={() => set({opacity: 0, transform: 'translateY(900px)'})}>Enter</EnterButton>
        </Hero>
    )
}
