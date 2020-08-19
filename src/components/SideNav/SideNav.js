import React from 'react'
import styled from 'styled-components'
import styles from './SideNav.module.scss'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {useSpring, animated} from 'react-spring'
// import {useInView} from 'react-intersection-observer'
import { Link } from 'react-scroll'

const Vl = styled(animated.div)`
    border-right: 2px solid black;
    height: 100vh;
    width: 2px;
    left: 300px;
    `



const SideNav = () => {


    const navItems = ['Skillset', 'Projects', 'Contact']
    // const [ref, inView] = useInView({
    //     threshold: 1
    // })

    // const [trail, set, stop] = useTrail(navItems.length, () => ({ opacity: 0, transform: 'translate(-120px)'}))

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
        <>
        <div className={styles.sideNav}>
            <div className={styles.navElements}>
                <section className={styles.brand}>
                    <h1 className={styles.name}>Josh Bangle</h1>
                    <h3>Web Dev. Voice Actor. Dad. Nerd.</h3>              
                </section>
                <ul className={styles.navList}>

                    <animated.li style={spring1}> 
                        <Link className={styles.skillsetLink} activeClass={styles.activeSkillset} to={`${navItems[0].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[0]}</Link>
                    </animated.li>
                    <animated.li style={spring2}> 
                        <Link className={styles.projectsLink} activeClass={styles.activeProjects} to={`${navItems[1].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[1]}</Link>
                    </animated.li>
                    <animated.li style={spring3}> 
                        <Link className={styles.contactLink} activeClass={styles.activeContact} to={`${navItems[2].toLowerCase()}`} spy={true} smooth={true} duration={800}>{navItems[2]}</Link>
                    </animated.li>


                </ul>
                <div className={styles.socials}>
                    <a href='https://www.github.com/joshbangle' rel="noopener noreferrer" target='_blank' className={styles.github}><FaGithubSquare size={50} /></a>
                    
                    <a href='https://www.linkedin.com/in/joshbangle' rel="noopener noreferrer" target='_blank' className={styles.linkedin}><FaLinkedin size={50} /></a>
                </div>
            </div>
            <Vl/>
        </div>
        
        </>
    )
}

export default SideNav