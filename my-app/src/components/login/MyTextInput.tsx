import { useField } from "formik";
// import { Formik } from 'formik';
import React from "react";
import { Form } from "semantic-ui-react";
import { Label } from "reactstrap";
import "../../App.scss";

interface Props {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
  required: true;
  pattern: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label className="labelRegister text-info labelsR">{props.label}</label>
      <input {...field} {...props} className="inputLogin" />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
