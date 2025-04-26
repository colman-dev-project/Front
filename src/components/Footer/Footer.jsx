import React from 'react';
import { Link } from '@mui/material';
import { FooterContainer, FooterLinks } from './Footer.styled.js';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import SharedTypography from '../shared/Text/SharedText.jsx';

function Footer() {
  return (
    <FooterContainer component="footer">
      <SharedTypography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} SecondHand Store
      </SharedTypography>

      <FooterLinks>
        <Link component={RouterLink} to={ROUTER_PATHS.ABOUT}>
          About
        </Link>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
