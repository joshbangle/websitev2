import React from 'react';
import SideNav from '../SideNav/SideNav'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'


const LayoutWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    height: 100vh;
    background-color: #eee;
`

const Vl = styled(animated.div)`
    border-left: 2px solid black;
    height: 100vh;
    margin-right: 32px;
    `

const ContentWrapper = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
`

const Layout = (props) => {

    const spring = useSpring({
        from: {
          transform: 'scaleY(0.2)'
        },
        to: {
          transform: 'scaleY(1)'
        },
        config: {
          friction: 46
        }
      })

    
    return (
        <LayoutWrapper>
            <SideNav />
            <Vl style={spring}/>
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            
        </LayoutWrapper>
    );
}

export default Layout;
