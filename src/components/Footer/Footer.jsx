import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <Box component="footer" className="footer-container">
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                © {new Date().getFullYear()} SecondHand Store
            </Typography>
            <Box className="footer-links">
                <Link href="/about" underline="hover" color="inherit">About</Link>
                <Link href="/terms" underline="hover" color="inherit">Terms</Link>
                <Link href="/contact" underline="hover" color="inherit">Contact</Link>
            </Box>
        </Box>
    );
}

export default Footer;
