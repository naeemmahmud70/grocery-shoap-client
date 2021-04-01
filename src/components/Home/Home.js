import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">

            <div className="div-style">
                {
                    products.map(pd => <Products product={pd} key={pd._id}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;