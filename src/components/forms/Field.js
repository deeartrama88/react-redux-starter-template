import React from "react";
import { Field } from 'formik';
import './Field.scss';

const CustomField = ({type, label, placeholder, name, checkboxLabel}) => {
    return (
        <Field name={name}>
            {({
                  field, // { name, value, onChange, onBlur }
                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
              }) => {
                const checkedAtt = type === 'checkbox' ? {checked: field.value} : null;
                return (
                    <div>
                        <div>{label}</div>
                        <input
                            className="input-box"
                            type={type}
                            {...field}
                            value={field.value}
                            placeholder={placeholder}
                            {...checkedAtt}
                        />
                        {type === 'checkbox' && checkboxLabel && (
                            <span className="checkbox-label">{checkboxLabel}</span>
                        )}
                        {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                        )}
                    </div>
                )
            }}
        </Field>
    )
};

export default CustomField;