import React from 'react';
import {images} from '../../json/images.js'
import styles from "../../Skillset.module.scss"
import styled, {keyframes} from 'styled-components'
import AnimatedCards from '../Card/Card'



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
    margin-bottom: 50px;
    color: #eee;
`


const starCount = () => {
    const count = []
    for(let i = 1; i <= 300; i++){
        count.push(i)
    }
    return count
}

function Skillset() {

    const icons = images.icons
    
    return (
        <div id='skillset' className={styles.skillsetContent}>
            {starCount().map((star, i) => (
                <Star 
                key={i}
                animationDuration={Math.floor(Math.random() * 2)}
                animationDelay={Math.random() * 6}
                size={Math.random() * 5}
                style={{
                    top: `${Math.floor(Math.random() * 160)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                }} />
            ))}
            <Header>I am a Front End Developer who specializes in React.js</Header>
            <Tag>Some of my favorite technologies include:</Tag>
            <div className={styles.iconGrid}>
                <AnimatedCards number={icons.length} data={icons} hoverText={true} />
            </div>
        </div>
    );
}

export default Skillset;