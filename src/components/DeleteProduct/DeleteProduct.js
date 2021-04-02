import React, { useEffect, useState } from 'react';

const DeleteProduct = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
            })
    }

    return (
        <div>
            <h3>Mange products:</h3>
            <hr/>
            {
                items.map(product => <h5>{product.name} <button onClick={() => handleDelete(product._id)} >Delete</button></h5>)
            }
        </div>
    );
};

export default DeleteProduct;