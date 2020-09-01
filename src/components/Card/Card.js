import React from 'react'
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'
import {useInView} from 'react-intersection-observer'
import HoverText from '../HoverText/HoverText'

const CardContainer = styled(animated.div)`
    border: none;
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
`

const ImageContainer = styled.div`
    @media(max-width: 335px) {
        max-width: 60px;
    }
    @media(max-width: 375px){
        width: 80px;
    }
    display: flex;
    height: 100%;
    width: 100px;
    overflow: hidden;
`

const Image = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
`

export default function AnimatedCards({ number = 1, data}) {
    const [ref, inView] = useInView({
        threshold: 0.2,
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
                <CardContainer key={i} id='card' style={attr}>
                    <HoverText text={data[i][2]}> 
                        <ImageContainer id='imgcontainer'>
                            <Image id='img' key={data[i][0]} src={data[i][1]} alt={data[i][2]} />
                        </ImageContainer>
                    </HoverText>                  
                </CardContainer>
            ))}
        </CardGrid>    
    )
}
