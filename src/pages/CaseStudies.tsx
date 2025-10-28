import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CaseStudies: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", pt: "120px" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Case Studies
        </Typography>
        <Typography variant="body1">
          Explore how we’ve helped clients solve real-world problems with innovative Android solutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default CaseStudies;