import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://car-doctor-server-neon.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    // console.log(services);
    
    return (
        <div>
            <div className='text-center'>
                <p className='text-orange-600 font-bold text-3xl'>Services</p>
                <h1 className='font-bold text-5xl my-5'>Our Services Area</h1>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised<br/>words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    services.map(ser => <ServicesItem key={ser._id} servies={ser}></ServicesItem>)
                }
            </div>
        </div>
    );
};

export default Services;