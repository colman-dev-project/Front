import React from 'react';
import { Typography, Link } from '@mui/material';
import { FooterContainer, FooterLinks } from './Footer.styled.js';
import { Link as RouterLink } from 'react-router-dom';
import { ENDPOINTS as ROUTER_PATHS } from '../../constants/routerPaths.js';

function Footer() {
  return (
    <FooterContainer component="footer">
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} SecondHand Store
      </Typography>
      <FooterLinks>
        <Link component={RouterLink} to={ROUTER_PATHS.ABOUT}>
          About
        </Link>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
