import React from "react";
import { Field } from 'formik';

const CustomField = ({type, label, placeholder, name}) => {
    return (
        <Field name={name}>
            {({
                  field, // { name, value, onChange, onBlur }
                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
              }) => (
                <div>
                    <div>{label}</div>
                    <input className="my-custom-input" type={type} {...field} placeholder={placeholder}/>
                    {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                    )}
                </div>
            )}
        </Field>
    )
};

export default CustomField;