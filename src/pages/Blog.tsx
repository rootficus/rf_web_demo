import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Blog: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", pt: "120px" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1">
          Stay updated with our latest insights, tutorials, and industry trends.
        </Typography>
      </Container>
    </Box>
  );
};

export default Blog;