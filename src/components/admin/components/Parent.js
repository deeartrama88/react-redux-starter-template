import React from 'react';

const Parent = ({children}) => {
    const updated = React.Children.map(children, child => React.cloneElement(child, {className: 'hello'}));
    return (
        <div className="parent">
            <h2>Parent</h2>
            {updated}
        </div>
    )
};

export default Parent;