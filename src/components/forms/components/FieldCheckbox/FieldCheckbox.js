import React from 'react';
import './FieldCheckbox.scss';

const FieldCheckbox = ({type, field, placeholder, checkboxLabel}) => {
    return (
        <div className="input-checkbox">
            <div className="input-checkbox-wrap">
                <input
                    className="input-box"
                    type={type}
                    {...field}
                    value={field.value}
                    placeholder={placeholder}
                    checked={field.value}
                />
                <div className="input-checkbox-custom-view"> </div>
            </div>
            {checkboxLabel && (
                <span className="checkbox-label">{checkboxLabel}</span>
            )}
        </div>
    )
};

export default FieldCheckbox;
