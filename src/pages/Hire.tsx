import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Hire: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", pt: "120px" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Hire Our Team
        </Typography>
        <Typography variant="body1" mb={4}>
          Ready to bring your app idea to life? Let’s connect and build something amazing together.
        </Typography>
        <Button variant="contained" color="primary">Schedule a Call</Button>
      </Container>
    </Box>
  );
};

export default Hire;