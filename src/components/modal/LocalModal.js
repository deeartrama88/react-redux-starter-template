import React, { useRef } from 'react';
import { useClickOutsideElement } from "../hooks/clickOutsideElement";
import './index.scss';

const LocalModal = ({children, isOpen, closeHandler}) => {
    const ref = useRef(null);
    useClickOutsideElement(ref, closeHandler);
    return (
        <div
            ref={ref}
            className={`localModal ${isOpen ? 'open': ''}`}
        >
            {children}
        </div>
    )
};

export default LocalModal;