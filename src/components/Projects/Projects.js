import React from 'react'
import styled from 'styled-components'
import AnimatedCards from '../Card/Card'
import {images} from '../../json/images'

const ProjectContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #BE6E46;
    padding-top: 30px;
`


export default function Projects() {

    const projectImages = images.projects

    return (
        <ProjectContainer id='projects'>
            <h1 style={{'font-size': '3em', color: '#fff'}}>Projects</h1>
            <AnimatedCards text={true} number={projectImages.length} data={projectImages} />

        </ProjectContainer>
    )
}
