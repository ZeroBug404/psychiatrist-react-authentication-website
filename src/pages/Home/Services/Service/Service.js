import React from "react";
import "./Service.css";

const Service = (props) => {
  console.log(props);
  const { name, price, picture, text } = props.service;
  // console.log(name);
  return (
    <div className="service">
      <img width={'100%'} src={picture} alt="" />
            <div className='service-info'>
                <h4 className="title">{name}</h4>
                <p className="font-weight-bold">Price: {price}</p>
                <span>{text}</span>
            </div>
            <button className='w-100 checkOut-btn'>Check Out</button>
    </div>
  );
};

export default Service;
