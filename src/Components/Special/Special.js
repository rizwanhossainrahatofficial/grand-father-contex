import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = (props) => {
    const {ornaments}=props
    const [jewellery,house]=useContext(RingContext)
    console.log(jewellery)
    return (
        <div>
            <h2>Special</h2>
            <small>{ornaments}</small>
            <p>{jewellery}</p>
            <small>{house}</small>
        </div>
    );
};

export default Special;