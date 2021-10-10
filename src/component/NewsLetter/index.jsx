import React from 'react'
import { NewsLetterButton, NewsLetterContainer, NewsLetterDesc, NewsLetterIcon, NewsLetterInput, NewsLetterInputCont, NewsLetterTitle } from './NewsLetterElements'

const NewsLetter = () => {
    return (
        <NewsLetterContainer>

            <NewsLetterTitle>
                Newsletter
            </NewsLetterTitle>
            <NewsLetterDesc>
                Get timely updates from your favorite products.
            </NewsLetterDesc>

            <NewsLetterInputCont>
                <NewsLetterInput placeholder="Your email"/>
                <NewsLetterButton>
                    <NewsLetterIcon/>
                </NewsLetterButton>
            </NewsLetterInputCont>

        </NewsLetterContainer>
    )
}

export default NewsLetter
