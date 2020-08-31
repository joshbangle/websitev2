import React, {useState, useEffect, useRef} from 'react';
import styled, { css } from 'styled-components'
import {useSpring, animated} from 'react-spring'
import {Link} from 'react-scroll'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const navColor = `#333333`;
const navFontColor = `#DDDDDD`;


const MobileNavContainer = styled.div`
    @media(max-width: 790px){

    }
    @media(max-width: 1023px){

    }
    @media(min-width: 1024px){
        display: none;
    }
    transition: all .3s ease-in-out;
    box-sizing: border-box;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    top: 0;
    left: 0;
    width: 100vw;
    height: ${props => props.open ? `415px` : `60px`};
    padding: 0 20px;
    background: ${navColor};
    color: ${navFontColor};
    z-index: 500;
`
const Name = styled.div`
    position: absolute;
    left: 20px;
    top: 0px;
    height: 60px;
    display: flex;
    align-items: center;
    color: ${navFontColor}; 
    .nameLink {
        font-family: Bebas Neue;
        font-size: 2.4em;
        margin: 0;
        font-weight: bold;
        letter-spacing: 1px;
    }
`
const HamburgerButton = styled.div`
    position: absolute;
    right: 20px;
    top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    min-width: 50px;
    border-radius: 8px;
`
const HamburgerLine = styled.span`
    transition: all .2s ease-in-out;
    opacity: 1;
    transform-origin: 29px;
    height: 3px;
    width: 30px;
    background: ${navFontColor};
    border-radius: 5px;
    &:nth-child(1){
        transform: ${props => props.open ? `rotate(-45deg)` : ``}
    };
    &:nth-child(2){
        ${ props => props.open && css`
            transform: translate(-5px);
            opacity: 0;
        `}
    };
    &:nth-child(3){
        transform: ${props => props.open ? `rotate(45deg)` : ``}
    };
`

const NavItems = styled(animated.ul)`
    display: ${props => props.open ? `flex` : `none`};
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    margin: 90px 0 45px 0;
    padding: 0;
    height: 100%;
    align-items: center;
    list-style: none;
    .nav-link {
        font-size: 1.9em;
        letter-spacing: 1px;
    }
`
const NavLink = styled(animated.li)`
    .activeLink {
        text-decoration: underline solid #FFF;
        color: #FFF;
        font-weight: bold;
    }
`
const Socials = styled.div`
    height: 50px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`
const Social = styled.a`
    margin: 10px;
    height: 50px;
    text-decoration: none;
    color: #0072b1;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
        color: #595959;
    }
} 
`


const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    const spring = useSpring({opacity: open ? 1 : 0, transform: open ? `translateY(0px)` : `translateY(-80px)`, delay: 100})

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
            console.log('removed')
        }
    }, [] )

    return (
        <MobileNavContainer ref={ref} open={open}>
            <Name>
                <Link className='nameLink' to='skillset' smooth={true}>Josh Bangle</Link>
            </Name>
            <HamburgerButton onClick={() => setOpen(!open)} >
                <HamburgerLine open={open} className='burger-line'/>
                <HamburgerLine open={open} className='burger-line'/>
                <HamburgerLine open={open} className='burger-line'/>
            </HamburgerButton>
            <NavItems style={spring} open={open}>
                <NavLink>
                    <Link onClick={() => setOpen(false)} activeClass='activeLink' className='nav-link' to='skillset' smooth={true} spy={true}>Skillset</Link>
                </NavLink>
                <NavLink>
                    <Link onClick={() => setOpen(false)} activeClass='activeLink' className='nav-link' to='projects' smooth={true} spy={true}>Projects</Link>
                </NavLink>
                <NavLink>
                    <Link onClick={() => setOpen(false)} activeClass='activeLink' className='nav-link' to='about' smooth={true} spy={true}>About</Link>
                </NavLink>
                <NavLink>
                    <Link onClick={() => setOpen(false)} activeClass='activeLink' className='nav-link' to='contact' smooth={true} spy={true}>Contact</Link>
                </NavLink>
                <Socials>
                    <Social href='https://www.github.com/joshbangle' rel="noopener noreferrer" target='_blank'><FaGithubSquare size={50} /></Social>
                    
                    <Social href='https://www.linkedin.com/in/joshbangle' rel="noopener noreferrer" target='_blank'><FaLinkedin size={50} /></Social>
                </Socials>
            </NavItems>
            
        </MobileNavContainer>
    );
}

export default MobileNav;
