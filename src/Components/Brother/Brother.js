import React from 'react';

const Brother = (props) => {
    const {house}=props
    return (
        <div>
            <h3>Brother</h3>
            <h5>{house}</h5>
        </div>
    );
};

export default Brother;