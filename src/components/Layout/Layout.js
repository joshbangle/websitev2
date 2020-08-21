import React from 'react';

import SideNav from '../SideNav/SideNav'
import styled from 'styled-components'
import Skillset from '../Skillset/Skillset'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'



const LayoutWrapper = styled.div`
    text-align: center;
    display: flex;
`

const Content = styled.div`
    margin-left: 332px;
    height: 100vh;
    float: right;
    font-family: 'Roboto';
    font-weight: 400;
    width: 100%;
`

const Layout = (props) => {


    return (
        <LayoutWrapper>
            <SideNav  />
            <Content id='content'>
                <Skillset/>
                <Projects/>
                <Contact/>
            </Content>
            
        </LayoutWrapper>
    );
}

export default Layout;
