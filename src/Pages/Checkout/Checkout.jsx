import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(authContext);
    const {_id, title, price, img } = useLoaderData();
    const navigate = useNavigate();

    const handelOrder = event =>{
        event.preventDefault();
        const from = event.target;
        const name = `${from.firstName.value} ${from.lastName.value}`;
        const phone = from.phone.value;
        const message = from.message.value;
        const email = user?.email || "unregistered";

        const orderInfo = {
            service:_id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
            img
        };
        
        fetch('https://car-doctor-server-neon.vercel.app/checkout', {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Your order succesfully placed');
                from.reset();
                navigate('/');
            }
        });
    }

    return (
        <div className='px-2'>
            <div className='lg:flex items-center justify-evenly border-4 mb-5 p-5'>
                <div>
                    <p className='text-3xl'>You are about to order: <span className='font-bold'>{title}</span> </p>
                    <p className='font-bold lg:mt-2'>Price: ${price}</p>
                </div>
                <div>
                    <img className='h-80 rounded-lg mt-3 lg:mt-0' src={img} alt="order img" />
                </div>
            </div>
            {/* order info  */}

            <div className='border-4 mb-5 p-5'>
                <form onSubmit={handelOrder}>
                    <div className='grid grid-cols-2 gap-5 mb-4'>
                        <input className='input input-bordered' type="text" name="firstName" placeholder='First name' required />

                        <input className='input input-bordered' type="text" name="lastName" placeholder='Last name' required />

                        <input className='input input-bordered' type="text" name="phone" placeholder='Your phone' required />

                        <input className='input input-bordered' type="email" name="email" defaultValue={user?.email} readOnly placeholder='Your email' />
                    </div>
                    <textarea className="textarea textarea-bordered w-full resize-none" placeholder="Message" name="message" required></textarea>
                    <button className="btn btn-success w-full mt-2">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;