import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const{house,ornaments}=props
    return (
        <div>
            <h3>Myself</h3>
            <h5>{house}</h5>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;