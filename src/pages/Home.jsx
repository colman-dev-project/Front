import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Home() {
    return (
        <Container sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to the Second-Hand Store!
                </Typography>
                <Typography variant="body1">
                    Here you can browse, post, and buy second-hand products easily and conveniently.
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;
