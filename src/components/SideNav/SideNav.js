import React from 'react'
import styled from 'styled-components'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-scroll'

const navColor = `#333333`
const navFontColor = `#DDD`

const SideNavContainer = styled.div`
    @media(max-width: 576px){
        display: none;
    }
    position: fixed;
    display: flex;
    width: 300px;
    height: 100vh;
    z-index: 12;
    top: 0;
    left: 0;
    padding: 0 16px 0 16px;
    background-color: ${navColor};
    color: ${navFontColor};
`


const Brand = styled.section`
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    h3 {
        margin-top: 0;
        letter-spacing: normal;
        font-family: 'Lora';
    }
    span {
        font-family: 'Bebas Neue';
        font-size: 3rem;
        text-align: right;
        margin: 0;
        margin-top: 20px;
    }
`
const Socials = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: flex-end;
    justify-content: flex-end;
    .social {
        padding: 0 10px;
        text-decoration: none;
        color: #0072b1;
        transition: all .2s ease-in-out;
        &:hover {
            transform: scale(1.1);
            color: #595959;
    }
`

const NavList = styled.ul`
    list-style: none;
    text-align: right;
    font-size: 2em;
    li a {
        font-style: none;
        letter-spacing: 2px;
        &:hover {
            text-decoration: underline solid #FFFFFF;
            color: #FFF;
        }
    }
    .projectsLink {
        text-decoration: underline solid transparent;
        cursor: pointer;
        transition: all .4s ease-in-out;
    }
    .skillsetLink {
        text-decoration: underline solid transparent;
        cursor: pointer;
        transition: all .4s ease-in-out;
    }
    .contactLink {
        text-decoration: underline solid transparent;
        cursor: pointer;
        transition: all .4s ease-in-out;
    }
    .activeLink {
        text-decoration: underline solid #FFF;
        color: #FFF;
        font-weight: bold;
    }
`
const NavElements = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: right;
`


const SideNav = () => {

    const navItems = ['Skillset', 'Projects', 'Contact']

    const [spring1, set1, stop1] = useSpring(() => ({opacity: 0, transform: 'translate(-120px)'}))
    const [spring2, set2, stop2] = useSpring(() => ({opacity: 0, transform: 'translate(-120px)'}))
    const [spring3, set3, stop3] = useSpring(() => ({opacity: 0, transform: 'translate(-120px)'}))


    React.useEffect(() => {
        set1({
            delay: 300,
            opacity: 1,
            transform: 'translate(0px)'
        })
        stop1()
        set2({
            opacity: 1,
            transform: 'translate(0px)',
            delay: 500
        })
        stop2()
        set3({
            delay: 700,
            opacity: 1,
            transform: 'translate(0px)'
        })
        stop3()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <SideNavContainer>
            <NavElements>
                <Brand>
                    <span>Josh Bangle</span>
                    <h3>Web Dev. Voice Actor. Dad. Nerd.</h3>              
                </Brand>
                    <NavList>
                        <animated.li style={spring1}> 
                            <Link className='skillsetLink' activeClass='activeLink' to={`${navItems[0].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[0]}</Link>
                        </animated.li>
                        <animated.li style={spring2}> 
                            <Link className='projectsLink' activeClass='activeLink' to={`${navItems[1].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[1]}</Link>
                        </animated.li>
                        <animated.li style={spring3}> 
                            <Link className='contactLink' activeClass='activeLink' to={`${navItems[2].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[2]}</Link>
                        </animated.li>
                    </NavList>                    
                <Socials>
                    <a href='https://www.github.com/joshbangle' rel="noopener noreferrer" target='_blank' className='social'><FaGithubSquare size={50} /></a>
                    
                    <a href='https://www.linkedin.com/in/joshbangle' rel="noopener noreferrer" target='_blank' className='social'><FaLinkedin size={50} /></a>
                </Socials>
            </NavElements>
        </SideNavContainer>
    )
}

export default SideNav