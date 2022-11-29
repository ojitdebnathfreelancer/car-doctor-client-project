import React from 'react';
import './CarouselItem.css';

const CarouselItem = ({ image }) => {
    const { id, img, prev, next } = image;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={img} className="w-full h-full rounded-lg object-cover" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
                <div>
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable<br />
                        Price For Car<br />
                        Servicing
                    </h1>
                    <p className='text-2xl pr-96 text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-5'>
                        <button className="btn btn-outline btn-secondary">Discover More</button>
                        <button className="btn btn-outline btn-secondary ml-5">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ml-5">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;