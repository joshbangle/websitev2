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
    background-color: #F28F3B;
    padding-top: 30px;
`


export default function Projects() {

    const projectImages = images.projects

    return (
        <ProjectContainer>
            <h1 style={{'font-size': '3em'}}>Projects</h1>
            <AnimatedCards text={true} number={projectImages.length} data={projectImages} />

        </ProjectContainer>
    )
}
