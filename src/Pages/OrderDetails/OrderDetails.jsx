import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const OrderDetails = () => {
    const { user, logoutUser } = useContext(authContext);
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://car-doctor-server-neon.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logoutUser();
                    navigate('/login');
                    return;
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data) {
                    setOrders(data)
                }
            })
    }, [user?.email, navigate, logoutUser]);
    // console.log(orders);

    const handelDelete = id => {
        const proceed = window.confirm(`Are you want to delete`)
        if (proceed) {
            fetch(`https://car-doctor-server-neon.vercel.app/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restOrder = orders.filter(order => order._id !== id);
                        setOrders(restOrder);
                    }
                });
        }
    };
    // single item delete from db 

    const handelDeleteAll = () => {
        const proceed = window.confirm(`Are you want to delete all`);
        if (proceed) {
            fetch(`https://car-doctor-server-neon.vercel.app/alldelete?email=${user?.email}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        setOrders([]);
                    }
                })
        }
    }


    const handelUpdate = id => {
        fetch(`https://car-doctor-server-neon.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const notApproved = orders.filter(order => order._id !== id);
                    const approved = orders.find(order => order._id === id);
                    approved.status = "Approved";
                    const all = [...notApproved, approved];
                    setOrders(all);
                }
            });
    };
    // update item by new obj value 

    return (
        <div>
            {
                orders.length !== 0 ?
                    <>
                        <div className="overflow-x-auto w-full">
                            <p className='text-center mb-3 text-3xl font-bold underline'>You have {orders.length} orders</p>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <button onClick={handelDeleteAll} className="btn btn-success">All Delete</button>
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Products</th>
                                        <th>Messages</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders?.map(order => <OrderRow key={order._id} order={order} handelDelete={handelDelete} handelUpdate={handelUpdate}></OrderRow>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <p className='text-4xl text-center my-5'>No Data Available</p>
            }
        </div>
    );
};

export default OrderDetails;