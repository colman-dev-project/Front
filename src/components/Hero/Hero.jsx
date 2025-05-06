import React from 'react';
import heroPhoto from '../../assets/hero-photo.png';
import { HeroImgBox } from './hero.styled.js'
import SharedTypography from '../shared/Text/SharedText.jsx';
import { UI_TEXT } from '../../constants/text.js';


const Hero = () => {
    return (
        <>
            <SharedTypography variant="h4" gutterBottom>
            {UI_TEXT.WELCOME_TO_THE_SECOND_HAND_STORE}
            </SharedTypography >

            <HeroImgBox
                component="img"
                src={heroPhoto}
                alt="Hero img"
            />

            <SharedTypography  variant="body1">
                Here you can browse, post, and buy second-hand products easily and
                conveniently.
            </SharedTypography >
        </>
    );
};


export default Hero;