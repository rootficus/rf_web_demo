// src/components/common/Header.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../atoms/button";

const navItems = [
  "Services",
  "Staff Augmentation",
  "Case Studies",
  "Blog",
  "How it Works",
  "Hire",
];

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: "1990px",
        height: "120px",
        bgcolor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 6,
      }}
    >
      {/* Logo */}
      <Typography
        sx={{
          color: "#6C5CE7",
          fontWeight: "bold",
          fontSize: "36px",
          width: "180px",
        }}
      >
        RFBiTE
      </Typography>

      {/* Navigation */}
      <Box sx={{ display: "flex", gap: 4, justifyContent: "center", flexGrow: 1 }}>
        {navItems.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: "16px",
              lineHeight: "20px",
              color: "#000000",
              cursor: "pointer",
              "&:hover": {
                color: "#6C5CE7",
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* CTA Button */}
      <CustomButton>Get a Quote</CustomButton>
    </Box>
  );
};

export default Header;