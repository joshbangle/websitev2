import React from 'react';
import {images} from '../../json/images.js'
import styles from "./Skillset.module.scss"
import styled from 'styled-components'
import AnimatedCards from '../Card/Card'


const Header = styled.h1`
    margin-bottom: 50px;
    background-color: transparent;
`
function Skillset() {
    const icons = images.icons

    return (
        <div className={styles.skillsetContent}>
            <Header>I am a Front End Developer who specializes in React.js. Some of my favorite technologies include:</Header>
            <AnimatedCards number={icons.length} text={false} data={icons} hoverText={true} />
        </div>
    );
}

export default Skillset;