import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house,ornaments}=props
    return (
        <div>
            <h3>father</h3>
            {house}
            <div style={{display:'flex'}}>
            <Myself house={house} ornaments={ornaments}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;