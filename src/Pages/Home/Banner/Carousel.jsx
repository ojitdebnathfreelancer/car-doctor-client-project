import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import CarouselItem from './CarouselItem';

const images = [
    {
        id:1,
        img:img1,
        prev:6,
        next:2,
    },
    {
        id:2,
        img:img2,
        prev:1,
        next:3,
    },
    {
        id:3,
        img:img3,
        prev:2,
        next:4,
    },
    {
        id:4,
        img:img4,
        prev:3,
        next:5,
    },
    {
        id:5,
        img:img5,
        prev:4,
        next:6,
    },
    {
        id:6,
        img:img6,
        prev:5,
        next:1,
    }
]

const Carousel = () => {
    return (
        <div className="carousel w-full h-[500px] my-5">
            {
                images.map(image => <CarouselItem key={image.id} image={image}></CarouselItem>)
            }
        </div>
    );
};

export default Carousel;