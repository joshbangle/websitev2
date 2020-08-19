import React from 'react';
import {images} from '../../json/images.js'
import styles from "./Skillset.module.scss"
import styled from 'styled-components'
import AnimatedCards from '../Card/Card'



const Header = styled.h1`
    margin-bottom: 50px;
    color: #eee;
    font-size: 2.5em;
`
function Skillset() {
    const icons = images.icons

    return (
        
        <div id='skillset' className={styles.skillsetContent}>
            <Header>I am a Front End Developer who specializes in React.js. Some of my favorite technologies include:</Header>
            <AnimatedCards number={icons.length} data={icons} hoverText={true} />
        </div>
    );
}

export default Skillset;