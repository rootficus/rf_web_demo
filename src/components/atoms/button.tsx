import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";

interface CustomButtonProps {
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
  props?: ButtonProps;
}

const useStyles = makeStyles({
  button: {
    "&.MuiButton-outlined": {
      borderRadius: "40px",
    },
    "&.MuiButton-outlinedPrimary": {
      backgroundColor: "var(--primary)",
      color: "#fff",
      "&:hover": {
        backgroundColor: "var(--primary)",
        opacity: 0.9,
      },
    },
    "&.MuiButton-outlinedSecondary": {
      backgroundColor: "var(--secondary)",
      color: "#fff",
      "&:hover": {
        backgroundColor: "var(--secondary)",
        opacity: 0.8,
      },
    },
  },
  innerWrap: {
    display: "flex",
    gap: "10px",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  loading,
  children,
  props,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.button} ${className ?? ""}`}
      {...props}
      disabled={loading || props?.disabled}
    >
      <span className={classes.innerWrap}>
        {loading && <CircularProgress size={24} />} {children}
      </span>
    </Button>
  );
};

export default CustomButton;
