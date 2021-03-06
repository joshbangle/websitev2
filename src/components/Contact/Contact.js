import React from 'react';
import styled from 'styled-components'

const ContactContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 400;
`
const Headline = styled.h3`
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: bold;
`

const Email = styled.div`
    @media(max-width: 599px) {
        font-size: 1.4em;
    }
    @media(min-width: 600px) {
        font-size: 2em;
    }
    @media(min-width: 1024px){
        font-size: 1.4em;
    }
    @media(min-width: 1120px){
        font-size: 2em;
    }
    font-size: 2em;
    font-weight: bold;
    font-family: Lora;
`
const TextContent = styled.div`
    @media(max-width: 940px) {
        box-sizing: border-box;
        width: 100%;
        text-align: center;
    }
    width: 50%;
    text-align: left;
    padding: 20px;
    .tag {
        font-family: Lora;
    }
`
const Icon = styled.img`
    height: 250px;
    margin-right: 40px;
`
const LinkedIn = styled.a`
    transition: all .2s ease-in-out;
    color: #fff;
    text-decoration: underline solid inherit;
    font-family: Lora;
    &:hover {
        color: #ddd;
    }
`
const Everything = styled.div`
    position: relative;
    bottom: 0;
`
const TrueContent = styled.div`
    @media(max-width: 940px){
        flex-direction: column;
        padding: 50px 0;
        width: 100vw;
    }
    box-sizing: border-box;
    padding: 0 10%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #28586E;
    color: #FFF;
`
const PadContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-end;
    left: 24px;
    bottom: 8px;
    height: 50px;
`
const Pad = styled.img`
    height: 100%;
`
const EasterEgg = styled.p`
    margin: 0 4px;
    color: #DDD;
`
const Contact = () => {
    return (
        <section id='contact'>
            <ContactContent>
                <TrueContent>
                    <Icon src='img/icons/satelite.svg' alt='satellite image' />

                    <TextContent>
                        <Headline>Contact me</Headline>
                        <h3 className='tag'>Feel free to reach out to me through <LinkedIn href='https://www.linkedin.com/in/joshbangle' target='_blank' rel="noopener noreferrer">LinkedIn</LinkedIn>, or email me directly at:</h3>
                        <Email>joshua.bangle@gmail.com</Email>
                    </TextContent>
                </TrueContent>
                
                <Everything>
                    <PadContainer>
                        <Pad src='/img/icons/pad2.svg' alt='rocket launch pad' />
                        <EasterEgg style={{margin: `0px 4px`}}>We Have Liftoff</EasterEgg>
                    </PadContainer>
                </Everything>
            </ContactContent>

        </section>
    );
}

export default Contact;
