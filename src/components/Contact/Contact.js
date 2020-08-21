import React from 'react';
import styled from 'styled-components'

const ContactContent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DEB841;
`
const Headline = styled.div`
    font-size: 3em;
    font-weight: bold;
`

const Email = styled.div`
    font-size: 2em;
    font-weight: bold;
`

const Contact = () => {
    return (
        <section id='contact'>
            <ContactContent>
                <Headline>Contact me</Headline>
                <h1>Feel free to reach out to me through LinkedIn, or email me directly at:</h1>
                <Email>joshua.bangle@gmail.com</Email>
            </ContactContent>
        </section>
    );
}

export default Contact;
