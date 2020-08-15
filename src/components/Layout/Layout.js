import React from 'react';

import SideNav from '../SideNav/SideNav'
import styled from 'styled-components'
import Skillset from '../Skillset/Skillset'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'



const LayoutWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #eee;
`

const ContentWrapper = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    overflow: auto;
`

const Layout = (props) => {


    return (
        <LayoutWrapper>
            <SideNav  />
            <ContentWrapper>
                <Skillset/>
                <Projects/>
                <Contact/>
            </ContentWrapper>
            
        </LayoutWrapper>
    );
}

export default Layout;
