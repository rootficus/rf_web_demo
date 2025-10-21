// src/pages/Service.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/common/Header";

const Service: React.FC = () => {
  return (
    <Box
      sx={{
        width: "1990px",
        height: "10126px",
        border: "1px solid #ccc",
        opacity: 1,
        transform: "rotate(0deg)",
        position: "relative",
        bgcolor: "#f9f9f9",
        overflow: "auto",
      }}
    >
      <Header />

      <Box
        sx={{
          marginTop: "757px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "160px",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "#6C5CE7" }}>
          Service Page
        </Typography>

        <Box sx={{ height: "500px", bgcolor: "#fff", boxShadow: 3, borderRadius: "8px" }}>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Content Block 1
          </Typography>
        </Box>

        <Box sx={{ height: "500px", bgcolor: "#fff", boxShadow: 3, borderRadius: "8px" }}>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Content Block 2
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;