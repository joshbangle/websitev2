import React, {Suspense} from 'react';

import SideNav from '../SideNav/SideNav'
import MobileNav from '../SideNav/MobileNav'
import styled from 'styled-components'
import Skillset from '../Skillset/Skillset'
import Loading from '../Loading/Loading'



const LayoutWrapper = styled.div`
    text-align: center;
    display: flex;
`

const Content = styled.div`
    @media(min-width: 700px) {
        margin: 0px;
        width: 100vw;
        padding: 0;
    }
    @media(min-width: 1024px){
        margin-left: 332px;
        height: 100vh;
        float: right;
        font-family: 'Roboto';
        font-weight: 400;
        width: 100%;
    }
`

const Projects = React.lazy(() => import(`../Projects/Projects`))
const Contact = React.lazy(() => import(`../Contact/Contact`))
const About = React.lazy(() => import(`../About/About`))

const Layout = (props) => {


    return (
        <LayoutWrapper>
            <MobileNav />
            <SideNav  />
            <Content id='content'>
                <Skillset/>
                <Suspense fallback={<Loading/>}>
                    <Projects/>
                    <About />
                    <Contact/>
                </Suspense>

            </Content>
        </LayoutWrapper>
    );
}

export default Layout;
