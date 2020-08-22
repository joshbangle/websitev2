import React from 'react';
import styled from 'styled-components'

const ContactContent = styled.div`
    box-sizing: border-box;
    padding: 0 20%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38586D;
    color: #FFF;
`
const Headline = styled.div`
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: bold;
`

const Email = styled.div`
    font-size: 2em;
    font-weight: bold;
    font-family: Lora;
`
const TextContent = styled.div`
    width: 50%;
    text-align: left;
`
const IconContainer = styled.div`
    text-align: right;
    width: 50%;
    box-sizing: border-box;
    padding-right: 32px;
`
const Icon = styled.img`
    height: 250px;
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
const Contact = () => {
    return (
        <section id='contact'>
            <ContactContent>
                <IconContainer>
                    <Icon src='img/icons/satelite.svg' />
                </IconContainer>
                <TextContent>
                    <Headline>Contact me</Headline>
                    <h1 style={{fontFamily: 'Lora'}}>Feel free to reach out to me through <LinkedIn href='https://www.linkedin.com/in/joshbangle' target='_blank'>LinkedIn</LinkedIn>, or email me directly at:</h1>
                    <Email>joshua.bangle@gmail.com</Email>
                </TextContent>
                
            </ContactContent>
        </section>
    );
}

export default Contact;
