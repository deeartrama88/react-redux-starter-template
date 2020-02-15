import React from 'react';
import { useFormikContext } from 'formik';
import "./index.scss";

const ButtonElement = ({el, callback}) => {
    return (
        <div
            onClick={() => callback(el)}
            className={`selectable-buttons-btn ${el.selected ? 'selected' : ''}`}
        >
            {el.name}
        </div>
    );
};

const MemoButtonElement = React.memo(ButtonElement);

const SelectableButtons = ({elements, formValue, multiple = false}) => {
    const [elems, setElems] = React.useState(elements);
    const { setFieldValue } = useFormikContext();

    const clickHandle = (el) => {
        const updatedElement = {...el, selected: !el.selected};
        const updatedArray = elems.map(e => e.name === updatedElement.name
            ? updatedElement
            : {...e, selected: multiple ? e.selected : false});
        const value = updatedArray.filter(e => e.selected).map(e => e.name);
        setElems(
            updatedArray,
            setFieldValue(formValue, value.length ? value : [])
        );
    };

    return (
        <div className="selectable-buttons">
            {elems.map(el => (
                <MemoButtonElement
                    key={el.name}
                    callback={clickHandle}
                    el={el}
                />
            ))}
        </div>
    )
};

export default SelectableButtons;
