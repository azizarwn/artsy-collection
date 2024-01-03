import React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DOBpicker = () => {
  return (
    <Field name="dob">
      {({ field, form: { setFieldValue } }) => {
        return (
          <DatePicker
            {...field}
            autoComplete="off"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="date-react"
            placeholderText="DD/MM/YYYY"
            dateFormat="dd/MM/yyyy"
            selected={field.value || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
          />
        );
      }}
    </Field>
  );
};

export default DOBpicker;
