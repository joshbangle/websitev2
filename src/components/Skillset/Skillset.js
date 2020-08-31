import React, {Suspense} from 'react';
import {images} from '../../json/images.js'
import styled, {keyframes} from 'styled-components'
import Loading from '../Loading/Loading'



const flicker = keyframes`
	0%,100% {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}

`
const Star = styled.div`
    animation: ${flicker} infinite;
    animation-duration: ${props => props.animationDuration + 1}s;
    animation-delay: ${props => props.animationDelay}s;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    border-radius: 2px;
    background: white;
`

const Content = styled.div`
    @media(max-width: 600px) {
        padding: 100px 20px;
        width: 100%;
    }
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #3B3B4F;
    padding: 140px 140px;
    z-index: 3;
`


const IconGrid = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Header = styled.h1`
    margin: 0;
    max-width: 100%;
    color: #eee;
    font-size: 3em;
    font-family: Bebas Neue;
    letter-spacing: 2px;
`
const Tag = styled.h3`
    font-family: Lora;
    font-size: 2em;
    margin-bottom: 106px;
    color: #eee;
`


const starCount = () => {
    const count = []
    for(let i = 1; i <= 300; i++){
        count.push(i)
    }
    return count
}

const AnimatedCards = React.lazy(() => import(`../Card/Card`))

function Skillset() {

    const icons = images.icons
    
    return (
        <Content id='skillset'>

            {starCount().map((star, i) => (
                <Star 
                key={i}
                animationDuration={Math.floor(Math.random() * 2)}
                animationDelay={Math.random() * 6}
                size={Math.random() * 5}
                style={{
                    top: `${Math.floor(Math.random() * 170)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                }} />
            ))}
                <Header>I am a Front End Developer who specializes in React.js</Header>
                <Tag>Some of my favorite technologies include:</Tag>
                <IconGrid>
                    <Suspense fallback={<Loading speed={100}/>}>
                        <AnimatedCards number={icons.length} data={icons} />
                    </Suspense>
                </IconGrid>            
        </Content>
    );
}

export default Skillset;