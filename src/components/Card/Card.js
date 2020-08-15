import React from 'react'
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'
import {useInView} from 'react-intersection-observer'
import HoverText from '../HoverText/HoverText'

const CardContainer = styled(animated.div)`
    border: none;
    height: ${props => props.text ? '400px' : 'auto'};
    max-width: 300px;
    background-color: #ddd;
    box-shadow: 6px 10px 10px -9px rgba(0,0,0,0.75);
    padding: 22px 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 18px;
`

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
    align-items: center;

    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-top: 56px;
`

const ImageContainer = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    overflow: hidden;
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    border-top: 1px solid black;
`
const Image = styled.img`
    object-fit: cover;
    width: 100%;
`

const DemoLink = styled.a`
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.1em;
    color: black;
`

export default function AnimatedCards({ hoverText = false, number = 1, text, data}) {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    const trail = useTrail(number, {
        to: {
            opacity: inView ? 1 : 0,
            transform: inView ? `translateY(0px)` : `translateY(150px)`
        },
        from: {
            opacity: 0,
            transform: `translateY(150px)`
        },
        delay: 300
    })

    return (
        <CardGrid id='grid' ref={ref}>
            {trail.map((attr, i) => (
                <CardContainer text={text} id='card' style={attr}>
                    {hoverText ? 
                    <HoverText text={data[i][2]}> 
                        <ImageContainer id='imgcontainer' style={{height: text ? `50%` : `100%`, width: text ? '400px' : '100px'}}>
                            <Image id='img' key={data[i][0]} src={data[i][1]} alt={data[i][2]} />
                        </ImageContainer>
                    </HoverText>
                    :
                    <ImageContainer id='imgcontainer'>
                        <a rel="noopener noreferrer" href={data[i][4]} target='_blank'><Image id='img' key={data[i][0]} src={data[i][1]} alt={data[i][2]} /></a>
                    </ImageContainer>
                    }
                    {text && 
                    <TextContent id='text'>
                        <h1 style={{margin: ' 8px 0 0 0'}}>{data[i][2]}</h1>
                        <h4>{data[i][3]}</h4>
                        <DemoLink rel="noopener noreferrer" href={data[i][4]} target='_blank'>Click here for live demo</DemoLink>
                    </TextContent>
                    }
                </CardContainer>
            ))}
        </CardGrid>    
    )
}
