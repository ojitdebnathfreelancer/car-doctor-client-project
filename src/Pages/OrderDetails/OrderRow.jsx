import React from 'react';

const OrderRow = ({ order, handelDelete, handelUpdate }) => {
    const {_id, customer, email, message, phone, price, serviceName, img, status } = order;
    // console.log(order)

    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handelDelete(_id)} className="btn btn-success">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>
                {message}
            </td>
            <th>
                <button onClick={()=>handelUpdate(_id)} className="btn btn-ghost btn-xs">{status? status : "Pandding"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;