import React from 'react';
import { useFormikContext } from "formik";
import { useClickOutsideElement } from "../../../hooks/clickOutsideElement";
import './index.scss';

const SelectDropDown = ({options, fieldName, className, label}) => {
    const [selected, setSelected] = React.useState(options[0]);
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef(null);
    const formikContext = useFormikContext();
    const closeDropdown = () => setIsOpen(false);
    useClickOutsideElement(ref, closeDropdown);

    React.useEffect(() => {
        formikContext.setFieldValue(fieldName, options[0].name);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectHandle = (el) => {
        setSelected(el);
        setIsOpen(false);
        formikContext.setFieldValue(fieldName, el.name);
    };

    return (
        <div className={`select-dropdown ${className ? className : ''}`} ref={ref}>
            {label && <div className="select-dropdown__label">{label}</div>}
            <div className="select-dropdown-selected-wrap">
                <div
                    className="select-dropdown-selected"
                    onClick={() => setIsOpen(!isOpen)}>
                    {selected.name}
                </div>
                <div className="select-dropdown-selected--arrow" onClick={toggleDropdown}>
                    <span className="arrow"> </span>
                </div>
            </div>
            <div className={`select-dropdown-menu ${isOpen ? 'open' : ''}`}>
                {options.map(el => (
                    <div
                        className="select-dropdown__item"
                        key={el.name}
                        onClick={() => selectHandle(el)}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SelectDropDown;
