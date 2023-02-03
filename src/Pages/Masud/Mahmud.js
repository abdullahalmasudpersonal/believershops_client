import React from 'react';

const Mahmud = (props) => {
    const {name, img} = props.product;
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} />
        </div>
    );
};

export default Mahmud;