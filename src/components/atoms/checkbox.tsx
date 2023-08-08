import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormikProps } from "formik";
import React from "react";

interface CustomButtonProps {
  className?: string;
  formik?: FormikProps<any>;
  label?: string;
  props?: CheckboxProps;
}

const useStyles = makeStyles({
  checkbox: {
    "&.MuiFormControlLabel-root": {
      marginRight: "0",
    },
  },
});

const CustomCheckbox: React.FC<CustomButtonProps> = ({
  className,
  formik,
  label,
  props,
}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={`${classes.checkbox} ${className ?? ""}`}
      label={label}
      control={
        <Checkbox
          onChange={formik?.handleChange}
          value={formik?.values[props?.name ?? ""]}
          {...props}
        />
      }
    />
  );
};

export default CustomCheckbox;
