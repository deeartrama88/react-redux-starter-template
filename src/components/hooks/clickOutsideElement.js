import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickOutsideElement(ref, callback) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            console.log("You clicked outside of me!");
            if (callback) callback();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

export {
    useClickOutsideElement
}