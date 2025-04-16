import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6">SecondHand Store</Typography>
                <Box className="navbar-links">
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
