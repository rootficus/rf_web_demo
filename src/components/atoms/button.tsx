// src/components/atoms/button.tsx
import React from "react";
import { Button, ButtonProps } from "@mui/material";

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#6C5CE7",
        color: "#FFFFFF",
        borderRadius: "6px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#5a4bd0",
        },
      }}
      {...props} // ✅ Spread all props including type, onClick, etc.
    />
  );
};

export default CustomButton;