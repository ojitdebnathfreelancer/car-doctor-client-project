import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesItem = ({ servies }) => {
    const { _id, img, title, price } = servies;
    // console.log(servies);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-bodl">
                    {title}
                </h2>
                <p className='text-2xl text-orange-600 font-semibold'>
                    Price: {price}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn">
                            <span className='uppercase flex'>
                                Checkout
                                <FaArrowRight className='ml-2' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;