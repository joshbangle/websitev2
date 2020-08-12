import React from 'react'
import styles from './SideNav.module.scss'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {useTrail, animated} from 'react-spring'



const SideNav = () => {
    const navItems = ['Skillset', 'Projects', 'Contact']
    const trail = useTrail(navItems.length, {
        to: {
            opacity: 1,
            transform: `translate(0px)`,
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
                <h3>Web Dev · Voice Actor · Dad · Nerd</h3> 
            </section>
            <ul className={styles.navList}>
                {trail.map((props, i) => (
                    <animated.li style={props}>
                        {navItems[i]}
                    </animated.li>
                ))}
            </ul>
            <div className={styles.socials}>
                <FaGithubSquare size={50} className={styles.icon}/>
                <FaLinkedin size={50} className={styles.icon}/>
            </div>
        </div>
    )
}

export default SideNav