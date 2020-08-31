import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    @media(max-width: 1479px) {
        padding: 100px 10px;
        width: 100%;
        flex-direction: column;
    }
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #53527F;
    padding: 140px 140px;
    z-index: 3;
`

const ImageContainer = styled.div`
    @media(max-width: 1479px) {
        width: 90%;
    }
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`
const Img = styled.img`
    width: 90%;
    border-radius: 20%;
`
const Text = styled.div`
    @media(max-width: 1479px) {
        width: 90%;
    }
    box-sizing: border-box;
    padding: 0 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #DDD;
    h3 {
        font-size: 2.4em;
        letter-spacing: 2px;
    }
    p {
        font-family: Lora;
        font-size: 1.2em;
        font-weight: bold;
    }
`

export default function About() {
    return (
        <Content id='about'>
            <ImageContainer>
                <Img src='/food.jpg' alt='Josh happily eating a sandwich' />
            </ImageContainer>
            <Text>
                <h3>Dallas based Web Developer</h3>
                <p>My focus has always been bringing ideas to life. I have a passion for creating visually interesting and impressive layouts, and learning the most effective ways to bring information to
                    the end user. However, my skillsets go far beyond coding. I have an exceptionally strong history of communication, both in team settings and with clients through sales and retail work, which
                    sets me apart from a lot of my developer peers.</p>
                <p> My learning began by utilizing a full-stack skillset with Ruby on Rails, and I soon realized that the majority of my time was spent creating responsive interfaces and making
                    sure that everything looked just right. Soon after, I turned to React.js in order to hone my front end skills and continue my passion for creativity in user experience.
                </p>
                <p>
                    Outside of coding, I am a professional voice actor, father, and avid gamer.
                </p>
            </Text>
        </Content>
    )
}
