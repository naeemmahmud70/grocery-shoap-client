import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Product = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const {name, price} = item;
    console.log(name, price)


    useEffect(() => {
        fetch('http://localhost:5000/product/' + id)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    return (
        <div>
            <h1>Product name: {name}</h1>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Product;