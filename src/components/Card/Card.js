import React from 'react'
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'
import {useInView} from 'react-intersection-observer'
import HoverText from '../HoverText/HoverText'

const CardContainer = styled(animated.div)`
    border: none;
    height: ${props => props.text ? '380px' : 'auto'};
    max-width: 300px;
    background-color: #ddd;
    box-shadow: 6px 10px 10px -9px rgba(0,0,0,0.75);
    padding: 16px 16px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 18px;
    :&hover {
        color: red;
    }
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
    height: 45%;
    width: 100%;
    overflow: hidden;
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 55%;
    margin-top: 0;
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

    const [trail, set, stop] = useTrail(number, () => (
        {
        opacity: 0,
        transform: `translateY(150px)`
        }
    ))
    React.useEffect(() => {
        if(inView) {
            set({
                opacity: .8,
                transform: `translateY(0)`,
                delay: 300
            })
            stop()
        }
        
        // eslint-disable-next-line
    }, [inView])

    return (
        <CardGrid id='grid' ref={ref}>
            {trail.map((attr, i) => (
                <CardContainer key={i} text={text} id='card' style={attr}>
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
                        <div>
                            <DemoLink rel="noopener noreferrer" href={data[i][4]} target='_blank'>Click here for live demo</DemoLink>
                            <br />
                            <DemoLink rel="noopener noreferrer" href={data[i][5]} target='_blank'>View Github Repo</DemoLink>
                        </div>
                    </TextContent>
                    }
                </CardContainer>
            ))}
        </CardGrid>    
    )
}
