import React from 'react'
import styled from 'styled-components'
import AnimatedCards from '../Card/Card'
import {images} from '../../json/images'

const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
`

const Headline = styled.h1`
    margin-top: 32px;
`

export default function Projects() {

    const projectImages = images.projects

    return (
        <ProjectContainer>
            <Headline>Projects</Headline>
            <AnimatedCards text={true} number={projectImages.length} data={projectImages}>
                <h1>test content</h1>
            </AnimatedCards>
        </ProjectContainer>
    )
}
