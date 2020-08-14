import React from 'react'
import styles from './SideNav.module.scss'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {useTrail, animated} from 'react-spring'
import {useInView} from 'react-intersection-observer'



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
        <div className={styles.sideNav}>
            <section className={styles.brand}>
                <h1 className={styles.name}>Josh Bangle</h1>
                <h3>Web Dev. Voice Actor. Dad. Nerd.</h3>              
            </section>
            <ul ref={ref} className={styles.navList}>
                {trail.map((props, i) => (
                    <animated.li style={props} key={i}>
                        <a className={styles.sideLink} href='/#' >{navItems[i]}</a>
                    </animated.li>
                ))}
            </ul>
            <div className={styles.socials}>
                <FaGithubSquare size={50} className={styles.github}/>
                <FaLinkedin size={50} className={styles.linkedin}/>
            </div>
        </div>
    )
}

export default SideNav