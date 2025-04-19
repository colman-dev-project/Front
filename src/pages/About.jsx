import React from "react";
import { Typography, Container, Box } from "@mui/material";
import useScrollToTop from "../hooks/useScrollToTop.js";

function About() {
  useScrollToTop();

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This platform allows users to buy and sell second-hand products with
          ease and safety.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
