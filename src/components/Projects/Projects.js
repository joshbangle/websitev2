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
    z-index: 4;
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
    @media(min-width: 720px) {

    }
    @media(max-width: 890px) {
        min-width: 100%;
    }
    @media(min-width: 1024px) {
        width: 100%;
        padding: 0 20%
    }
    @media(min-width: 1248px) {
        width: 50%;
        padding: 0 4%;
    }
    @media(min-width: 1700px) {
        padding: 0 10%;
    }
    box-sizing: border-box;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    padding: 0 4%;
`
const Name = styled.h3`
    font-size: 2.5em;
    letter-spacing: 1px;
    color: #333;
`

const Desc = styled.p`
    font-size: 1.3em;
    font-family: Lora;
    margin-bottom: 0;
`

const DemoLink = styled.a`
    @media(max-width: 424px){
        margin-top: 15px;
    }
    margin: 0 15px;
    font-size: 1.5em;
    font-weight: bold;
    transition: all .2s ease-in-out;
    font-family: Lora;
    color: inherit;
    &:hover {
        background-color: #ddd;
        border-radius: 5px;
    }
`
const LinkContainers = styled.div`
    @media(max-width: 424px) {
        flex-direction: column;
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
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

const Title = styled.h3`
    position: relative;
    font-size: 4em;
    color: #333;
    z-index: 40;
`

const IconLinkWrapper = styled.a`
    display: flex;
    justify-content: center;
    width: 100%;
    text-wrap: nowrap;
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
        transform: 'translateY(200px)',
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
            <Title>Projects</Title>
            <Grid ref={ref}>
                {trail.map((attr, i) => (
                    <Project style={attr} key={projectImages[i][0]}>
                        <Name>{projectImages[i][2]}</Name>
                        <IconContainer>
                            <IconLinkWrapper href={projectImages[i][4]} target="_blank" rel="noopener noreferrer" aria-label={`Link to demo ${projectImages[i][2]}`}><Icon src={projectImages[i][1]} alt={projectImages[i][6]} /></IconLinkWrapper>
                        </IconContainer>
                        <Desc>{projectImages[i][3]}</Desc>
                        <LinkContainers>
                            <DemoLink href={projectImages[i][4]} target="_blank" rel="noopener noreferrer">Live Demo</DemoLink>
                            <DemoLink href={projectImages[i][5]} target="_blank" rel="noopener noreferrer">View GitHub</DemoLink>
                        </LinkContainers>
                        
                    </Project>
                ))}
            </Grid>
            <RocketContainer style={spring}>
                <Rocket src={`/img/icons/rocket.png`} alt='rocket launching image' />
            </RocketContainer>
            
        </ProjectContainer>
    )
}
