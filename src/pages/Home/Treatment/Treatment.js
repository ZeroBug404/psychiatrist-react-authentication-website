import React from 'react';
import brain from '../../../images/brain.png';
import './Treatment.css';
 
const Treatment = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center title'>Understanding your Brain</h2>
            <div className='treatment'>
                <div className='left'>
                    <li><span style={{color: '#3aae36'}}>.01</span> Mature Development</li>
                    <li><span style={{color: '#3aae36'}}>.02</span> Anti-anxiety Treatments</li>
                    <li><span style={{color: '#3aae36'}}>.03</span> Antipsychotic Medications</li>
                </div>
                <div className='brain-img'>
                    <img src={brain} alt="" />
                </div>
                <div className='right'>
                    <li><span style={{color: '#3aae36'}}>.04</span> Mature Development</li>
                    <li><span style={{color: '#3aae36'}}>.05</span> Anti-anxiety Treatments</li>
                    <li><span style={{color: '#3aae36'}}>.06</span> Antipsychotic Medications</li>
                </div>
            </div>
        </div>
    );
};

export default Treatment;