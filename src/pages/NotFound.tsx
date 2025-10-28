import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "background.default", pt: "120px", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" fontWeight="bold" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" mb={4}>
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;