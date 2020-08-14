import React from 'react';
import {icons} from '../../json/icons.js'
import HoverText from '../HoverText/HoverText'
import styles from "./Skillset.module.scss"
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'


const Card = styled(animated.div)`
    border: none;
    height: 100px;
    background-color: #fff;
    box-shadow: 6px 10px 10px -9px rgba(0,0,0,0.75);
    padding: 22px 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 18px;
    &:hover {
        transform: scale(1.2);
    }
`

// const CardText = styled.h3`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 400;
// `

const Header = styled.h1`
    margin-bottom: 50px;
`
function Skillset() {
    const images = icons.images
    const trail = useTrail(images.length, {
        to: {
            opacity: 1,
            transform: `translateY(0px)`
        },
        from: {
            opacity: 0.1,
            transform: `translateY(150px)`
        }
    })
    return (
        <div className={styles.skillsetContent}>
            <Header>I am a Front End Developer who specializes in React.js. Some of my favorite technologies include:</Header>
            <section className={styles.iconGrid}>
                {trail.map((props, i) => (
                    <Card style={props}>
                        <div style={{width: '100%', height: '50%'}}>
                            <HoverText text={images[i][2]}>
                                <img style={{height: '100%'}} key={images[i][0]} src={images[i][1]} alt={images[i][2]}/>
                            </HoverText>   
                        </div>
                        {/* <CardText style={{height: '50%'}}>{images[i][2]}</CardText> */}
                        
                    </Card>
                ))}
            </section>
        </div>
    );
}

export default Skillset;