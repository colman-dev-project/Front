<<<<<<< HEAD
import React from "react";
import { Typography, Container, Box } from "@mui/material";
import useScrollToTop from "../hooks/useScrollToTop.js";
import Hero from "../components/hero/hero.jsx";

=======
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import useScrollToTop from '../hooks/useScrollToTop.js';
>>>>>>> 64f92d7c89f7f7914944b8e88630d33cd19092a7

function Home() {
  useScrollToTop();

  return (
    <Container sx={{ py: 4 }}>
<<<<<<< HEAD
      <Box sx={{ textAlign: "center" }}>
        <Hero/>
=======
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Second-Hand Store!
        </Typography>
        <Typography variant="body1">
          Here you can browse, post, and buy second-hand products easily and
          conveniently.
        </Typography>
>>>>>>> 64f92d7c89f7f7914944b8e88630d33cd19092a7
      </Box>
    </Container>
  );
}

export default Home;
