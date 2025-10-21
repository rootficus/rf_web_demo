// src/pages/index.tsx
import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import InputField from "../components/atoms/input";
import CustomCheckbox from "../components/atoms/checkBox";
import CustomButton from "../components/atoms/button";

const Home: React.FC = () => {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <Formik
        initialValues={{ title: "", check: false }}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
        }}
      >
        {() => (
          <Form>
            <Field name="title">
              {({ field }: FieldProps) => (
                <InputField label="Your Name" {...field} />
              )}
            </Field>

            <Field name="check">
              {({ field, meta, form }: FieldProps) => (
                <CustomCheckbox label="Subscribe to updates" field={field} meta={meta} form={form} />
              )}
            </Field>

            <CustomButton type="submit">Submit</CustomButton>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Home;