import React from 'react';

const Sister = (props) => {
    const {house}=props
    return (
        <div>
            <h3>Sister</h3>
            <h5>{house}</h5>
        </div>
    );
};

export default Sister;