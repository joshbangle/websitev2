import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../hooks/useHover'
import styled, {keyframes} from 'styled-components'


const Container = styled.div`
  position: relative;
  display: flex;
  z-index: 20;
`
const fade = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const Info = styled.div`
  animation-name: ${fade};
  animation-duration: 0.2s;
  box-sizing: border-box;
  position: absolute;
  width: 160px;
  bottom: 100%;
  left: 50%;
  margin-left: -80px;
  border-radius: 3px;
  background-color: hsla(80, 0%, 40%, 0.9);
  letter-spacing: 1px;
  padding: 7px;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Lora;
`

export default function Tooltip ({ text, children}) {

  const [hovering, attrs] = useHover()

  return(
      <Container {...attrs}>
          {hovering && <Info>{text}</Info>}
          {children}
      </Container>
      
  )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
}

