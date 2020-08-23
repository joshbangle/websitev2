import React from 'react';
import styled from 'styled-components'

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Headline = styled.div`
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: bold;
`

const Email = styled.div`
    @media(max-width: 600px) {
        width: 100%;
        text-align: center;
        font-size: 1.4em;
        
    }
    font-size: 2em;
    font-weight: bold;
    font-family: Lora;
`
const TextContent = styled.div`
    @media(max-width: 600px) {
        width: 100%;
        padding: 20px;
        text-align: center;
    }
    width: 50%;
    text-align: left;
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
    @media(max-width: 600px){
        flex-direction: column;
        padding: 50px 0;
        width: 100vw;
    }
    box-sizing: border-box;
    padding: 0 30%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38586D;
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
const Contact = () => {
    return (
        <section id='contact'>
            <ContactContent>
                <TrueContent>
                    <Icon src='img/icons/satelite.svg' />

                    <TextContent>
                        <Headline>Contact me</Headline>
                        <h1 style={{fontFamily: 'Lora'}}>Feel free to reach out to me through <LinkedIn href='https://www.linkedin.com/in/joshbangle' target='_blank'>LinkedIn</LinkedIn>, or email me directly at:</h1>
                        <Email>joshua.bangle@gmail.com</Email>
                    </TextContent>
                </TrueContent>
                
                <Everything>
                    <PadContainer>
                        <Pad src='/img/icons/pad2.svg' />
                        <p style={{margin: `0px 4px`}}>We Have Liftoff</p>
                    </PadContainer>
                </Everything>
            </ContactContent>

        </section>
    );
}

export default Contact;
