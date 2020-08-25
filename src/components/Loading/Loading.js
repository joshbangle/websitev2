import React, {useState, useEffect} from 'react'
import {FaCircle} from 'react-icons/fa'
import styled from 'styled-components'

const LoadingContainer = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
`


export default function Loading({speed = 500, number = 5, color = `white`}) {

    const [circles, setCircles] = useState([<FaCircle style={{color: `${color}`}}/>])

    useEffect(() => {
        const id = window.setInterval(() => {
            if( circles.length === number ){
                setCircles([<FaCircle style={{color: `${color}`}}/>])
            } else {
                setCircles((circles) => [...circles, <FaCircle style={{color: `${color}`}}/>])
            }
            
        }, speed)
        return () => window.clearInterval(id)
        // eslint-disable-next-line
    }, [circles])

    
    return (
        <LoadingContainer>
            {circles}
        </LoadingContainer>
    )
}
