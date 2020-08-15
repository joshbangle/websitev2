import React from 'react'
import styled from 'styled-components'
import styles from './SideNav.module.scss'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {useTrail, animated} from 'react-spring'
import {useInView} from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const Vl = styled(animated.div)`
    position: abolute;
    border-right: 2px solid black;
    height: 100vh;
    width: 2px;
    margin: 0 0 0 23px;
    `

const SideNav = () => {
    const navItems = ['Skillset', 'Projects', 'Contact']
    const [ref, inView] = useInView({
        threshold: 1
    })
    const trail = useTrail(navItems.length, {
        to: {
            opacity: inView ? 1: 0,
            transform: inView ? `translate(0px)` : `translate(-120px)`,
        },
        from: {
            opacity: 0,
            transform: `translate(-120px)`
        },
    })
    return(
        <>
        <div className={styles.sideNav}>
            <div className={styles.navElements}>
                <section className={styles.brand}>
                    <h1 className={styles.name}>Josh Bangle</h1>
                    <h3>Web Dev. Voice Actor. Dad. Nerd.</h3>              
                </section>
                <ul ref={ref} className={styles.navList}>
                    {trail.map((props, i) => (
                        <animated.li style={props} key={i}>
                            <Link to={`/${navItems[i]}`} className={styles.sideLink} >{navItems[i]}</Link>
                        </animated.li>
                    ))}
                </ul>
                <div className={styles.socials}>
                    <a href='https://www.github.com/joshbangle' rel="noopener noreferrer" target='_blank' className={styles.github}><FaGithubSquare size={50} /></a>
                    
                    <a href='https://www.linkedin.com/in/joshbangle' rel="noopener noreferrer" target='_blank' className={styles.linkedin}><FaLinkedin size={50} /></a>
                </div>
            </div>
            
        </div>
        <Vl/>
        </>
    )
}

export default SideNav