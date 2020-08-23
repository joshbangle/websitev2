import React from 'react';
import {images} from '../../json/images.js'
import styles from "../../Skillset.module.scss"
import styled from 'styled-components'
import AnimatedCards from '../Card/Card'
import Stars from '../Stars/Stars'



const Header = styled.h2`
    margin: 0;
    max-width: 100%;
    color: #eee;
    font-size: 3em;
    font-family: Bebas Neue;
    letter-spacing: 2px;
`
const Tag = styled.h3`
    font-family: Lora;
    font-size: 2em;
    margin-bottom: 50px;
    color: #eee;
`



function Skillset() {
    const icons = images.icons

    return (
        
        <div id='skillset' className={styles.skillsetContent}>
            <Stars />
            <Header>I am a Front End Developer who specializes in React.js</Header>
            <Tag>Some of my favorite technologies include:</Tag>
            <div className={styles.iconGrid}>
                <AnimatedCards number={icons.length} data={icons} hoverText={true} />
            </div>
            
        </div>
    );
}

export default Skillset;