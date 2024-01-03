import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log("field", field, "meta", meta);
  return (
    <div>
      <div className="textField-wrap">
        <label htmlFor={field.name} className="loginLab">
          {label}
        </label>
        <input
          {...field}
          {...props}
          className={`loginInput ${meta.touched && meta.error && 'errorInput'}`}
          autoComplete="off"
        />
      </div>
      <ErrorMessage component="div" className="error-message" name={field.name}/>
    </div>
  );
};

export default TextField;
