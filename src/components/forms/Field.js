import React from "react";
import { Field } from 'formik';
import './Field.scss';

const CustomField = ({type, label, placeholder, name}) => {
    return (
        <Field name={name}>
            {({
                  field, // { name, value, onChange, onBlur }
                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
              }) => (
                <div className='input-box'>
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