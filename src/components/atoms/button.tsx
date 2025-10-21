import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, type = "button" }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        borderRadius: "8px",
        paddingX: "24px",
        paddingY: "12px",
        fontSize: "16px",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;