import React from "react";
import {Field} from 'formik';
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox';
import './Field.scss';

const CustomField = ({type, label, placeholder, name, checkboxLabel}) => {
    const className = 'input-box';
    const getInputElement = (field) => {
        if (type === 'checkbox') {
            return (
                <FieldCheckbox
                    class={className}
                    type={type}
                    field={field}
                    placeholder={placeholder}
                    checkboxLabel={checkboxLabel}
                />
            )
        }
        if (type === 'textarea') {
            return (
                <textarea rows="10"
                  className={className}
                  value={field.value}
                  placeholder={placeholder}
                  {...field}
                />
            )
        }
        return (
            <input
                className={className}
                type={type}
                value={field.value}
                placeholder={placeholder}
                {...field}
            />
        )
    };
    return (
        <Field name={name}>
            {({
                  field, // { name, value, onChange, onBlur }
                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
              }) => {
                return (
                    <div>
                        <label className="input-label">{(type === 'text' || type === 'textarea') && label}</label>
                        <div className="input-box-wrap">
                            {getInputElement(field)}
                            {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                            )}
                        </div>
                    </div>
                )
            }}
        </Field>
    )
};

export default CustomField;
