import React from 'react'
import styled from 'styled-components'
import {animated} from 'react-spring'

const CardContainer = styled(animated.div)`
    border: 1px solid grey;
    width: 200px;
    height: 400px;
    background-color: #fff;
    box-shadow: 6px 10px 10px -9px rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    margin: 0 8px;
`

export default function Card(props) {
    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}
