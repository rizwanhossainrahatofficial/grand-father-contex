import React from 'react';

const Uncle = (props) => {
    const{house}=props
    return (
        <div>
            <h3>uncle</h3>
            <h5>{house}</h5>
        </div>
    );
};

export default Uncle;