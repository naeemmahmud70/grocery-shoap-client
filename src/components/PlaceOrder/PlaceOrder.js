import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Placed from '../Placed/Placed';


const PlaceOrder = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(()=>{
        fetch('http://localhost:5000/checkOut')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map(order => <Placed order={order} key={order._id}></Placed> )
            }
        </div>
    );
};

export default PlaceOrder;