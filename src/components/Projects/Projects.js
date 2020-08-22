import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'
import {images} from '../../json/images'
import {useInView} from 'react-intersection-observer'

const ProjectContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    justify-content: center;
    width: 48%;
    height: 200px;
`
const Icon = styled.img`
    height: 100%;
`

const Project = styled(animated.div)`
    box-sizing: border-box;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
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
    font-size: 1.3em;
    font-family: Lora;
    color: inherit;
`

export default function Projects() {

    const projectImages = images.projects
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    const [trail, set, stop] = useTrail(projectImages.length, () => (
        {
            opacity: 0,
            transform: 'translateY(150px)'
        }
    ))
    
    useEffect(() => {
        if(inView){
            set({
                opacity: 1,
                transform: 'translateY(0px)',
                delay: 500,
            })
            stop()
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
                            <a href={projectImages[i][4]} target="_blank" rel="noopener noreferrer"><Icon src={projectImages[i][1]} /></a>
                        </IconContainer>
                        <Desc>{projectImages[i][3]}</Desc>
                        <DemoLink href={projectImages[i][4]} target="_blank" rel="noopener noreferrer">Click here for a live demo</DemoLink>
                        <DemoLink href={projectImages[i][5]} target="_blank" rel="noopener noreferrer">Click here to view on GitHub</DemoLink>
                    </Project>
                ))}
            </Grid>
            
        </ProjectContainer>
    )
}
