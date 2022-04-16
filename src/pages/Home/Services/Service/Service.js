import React from 'react';

const Service = (props) => {
    console.log(props);
    const {name, price, picture} = props.service;
    // console.log(name);
    return (
        <div>
            <img width={'25%'} src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
        </div>
    );
};

export default Service;