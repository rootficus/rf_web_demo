// src/components/atoms/checkBox.tsx
import React from "react";
import { FormControlLabel, Checkbox, FormHelperText } from "@mui/material";
import { FieldInputProps, FieldMetaProps, FormikProps } from "formik";

interface CustomCheckboxProps {
  label: string;
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: FormikProps<any>;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, field, meta }) => {
  return (
    <>
      <FormControlLabel
        control={<Checkbox {...field} checked={field.value} sx={{ color: "#6C5CE7" }} />}
        label={label}
      />
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </>
  );
};

export default CustomCheckbox;