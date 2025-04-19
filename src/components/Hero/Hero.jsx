import React from 'react';
import heroPhoto from '../../assets/hero-photo.png';
import { HeroImgBox } from './hero.styled.js'
import { Typography} from "@mui/material";

const Hero = () => {
    return (
        <div>
            <HeroImgBox
                component="img"
                src={heroPhoto}
                alt="Hero img"
            />
            <Typography variant="h4" gutterBottom>
                Welcome to the Second-Hand Store!
            </Typography>
            <Typography variant="body1">
                Here you can browse, post, and buy second-hand products easily and
                conveniently.
            </Typography>
        </div>
    );
};


export default Hero;