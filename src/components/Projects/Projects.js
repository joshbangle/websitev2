import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSpring, useTrail, animated} from 'react-spring'
import {images} from '../../json/images'
import {useInView} from 'react-intersection-observer'

const ProjectContainer = styled.div`
    @media(max-width: 600px){
        width: 100vw;
    }
    width: 100%;
    min-height: 100vh;
    background-color: #FFF;
    padding-top: 80px;
`

const Grid = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 48px;
    margin-bottom: 120px;
`

const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    width: 48%;
    height: 200px;
`
const Icon = styled.img`
    height: 100%;
`

const Project = styled(animated.div)`
    @media(max-width: 890px) {
        width: 100%;
        padding: 0;
    }
    box-sizing: border-box;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    padding: 0 10%;
`
const Name = styled.h1`
    letter-spacing: 1px;
    color: #333;
`

const Desc = styled.p`
    font-size: 1.3em;
    font-family: Lora;
    margin-bottom: 0;
`

const DemoLink = styled.a`
    margin: 0 10px;
    font-size: 1.3em;
    font-weight: bold;
    transition: all .2s ease-in-out;
    font-family: Lora;
    color: inherit;
    &:hover {
        background-color: #ddd;
        border-radius: 5px;
    }
`
const RocketContainer = styled(animated.div)`
    position: absolute;
    margin-left: 40px;
    height: 85px;
`
const Rocket = styled.img`
    height: 100%;
    transform: rotate(-45deg);
`
export default function Projects() {

    const projectImages = images.projects
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    const [trail, setTrail, stopTrail] = useTrail(projectImages.length, () => (
        {
            opacity: 0,
            transform: 'translateY(150px)'
        }
    ))
    
    const [spring, setSpring, stopSpring] = useSpring(() => (
        {
        config: {
            tension: 50,
            friction: 130,
            mass: 10,
            precision: 0.1
        },
        transform: 'translateY(0px)',
        opacity: 1
        }
    ))

    useEffect(() => {
        if(inView){
            setTrail({
                opacity: 1,
                transform: 'translateY(0px)',
                delay: 500,
            })
            stopTrail()
            setSpring({
                transform: 'translateY(-2800px)',
                opacity: 0,
                delay: 1700
            })
            stopSpring()
        }
        // eslint-disable-next-line
    }, [inView])

    return (
        <ProjectContainer id='projects'>
            <h1 style={{'fontSize': '4em', color: '#333'}}>Projects</h1>
            <Grid ref={ref}>
                {trail.map((attr, i) => (
                    <Project style={attr} key={projectImages[i][0]}>
                        <Name>{projectImages[i][2]}</Name>
                        <IconContainer>
                            <a style={{width: '100%'}} href={projectImages[i][4]} target="_blank" rel="noopener noreferrer"><Icon src={projectImages[i][1]} /></a>
                        </IconContainer>
                        <Desc>{projectImages[i][3]}</Desc>
                        <div>
                            <DemoLink href={projectImages[i][4]} target="_blank" rel="noopener noreferrer">Live Demo</DemoLink>
                            <DemoLink href={projectImages[i][5]} target="_blank" rel="noopener noreferrer">GitHub</DemoLink>
                        </div>
                        
                    </Project>
                ))}
            </Grid>
            <RocketContainer style={spring}>
                <Rocket src={`/img/icons/rocket.png`} />
            </RocketContainer>
            
        </ProjectContainer>
    )
}
