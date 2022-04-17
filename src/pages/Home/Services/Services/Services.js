/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id='services' className='container mb-5'>
            <h2 style={{color: '#20471f'}} className='text-center m-5'>Popular Therapy Services</h2>
            <div className='services'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;