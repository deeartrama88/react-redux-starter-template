import React from 'react';

const Child = ({className}) => {
    return (
        <div className="children">
            this is a child with extra prop ClassName: {`${className}`}
        </div>
    )
};

export default Child;