import { FormLabel, TextField, TextFieldProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormikProps } from "formik";
import React from "react";

interface CustomButtonProps {
  className?: string;
  label?: string;
  formik?: FormikProps<any>;
  props: TextFieldProps;
}

const useStyles = makeStyles({
  label: {
    display: "block",
  },
  input: {
    //  backgroundColor: "var(--primary)",
  },
});

const InputField: React.FC<CustomButtonProps> = ({
  className,
  formik,
  label,
  props,
}) => {
  const classes = useStyles();
  return (
    <div className={className}>
      {label && <FormLabel className={classes.label}>{label}</FormLabel>}
      <TextField
        className={classes.input}
        onChange={formik.handleChange}
        value={formik.values[props?.name ?? ""]}
        {...props}
      />
    </div>
  );
};

export default InputField;
