import React, {useRef} from 'react';
import styled, { keyframes } from 'styled-components'

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

const StarContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    min-height: 100vh;
`


const starCount = () => {
    const count = []
    for(let i = 1; i <= 300; i++){
        count.push(i)
    }
    return count
}
const Stars = ({height}) => {

    const starsRef = useRef(null)
    console.log(height)
    return (
        <StarContainer ref={starsRef} id='star-container'>
            {starCount().map((star, i) => (
                <Star 
                key={i}
                animationDuration={Math.floor(Math.random() * 2)}
                animationDelay={Math.random() * 6}
                size={Math.random() * 5}
                style={{
                    top: `${Math.floor(Math.random() * height)}px`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                }} />
            ))}
        </StarContainer>
    );
}

export default Stars;