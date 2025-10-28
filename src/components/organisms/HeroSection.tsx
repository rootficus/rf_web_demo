import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#f0f4ff", py: 10 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Build Powerful Android Apps with Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We craft scalable, high-performance Android applications tailored to your business goals.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get a Free Quote
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;