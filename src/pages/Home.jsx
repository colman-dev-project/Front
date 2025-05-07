import React from "react";
import {Container, Box } from "@mui/material";
import useScrollToTop from "../hooks/useScrollToTop.js";
import Hero from "../components/Hero/Hero.jsx";

function Home() {
  useScrollToTop();
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Hero/>
      </Box>
    </Container>
  );
}
export default Home;