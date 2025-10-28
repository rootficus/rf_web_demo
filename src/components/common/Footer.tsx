import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#f0f0f0", py: 4, mt: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Android App Studio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;