import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div>
            <div className="hero py-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                        <img src={parts} className="w-3/5 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8" alt='' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-2xl text-orange-600 font-bold'>About us</p>
                        <h1 className="text-5xl font-bold mt-5">
                            We are qualified<br />
                            & of experience<br />
                            in this field
                        </h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary mt-5">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;