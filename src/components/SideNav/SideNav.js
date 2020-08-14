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
                <img src='/img/Frame 12.png' alt='logo home'/>                
            </section>
            <ul className={styles.navList}>
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