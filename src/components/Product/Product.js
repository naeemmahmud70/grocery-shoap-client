import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Product = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, price } = item;
    console.log(name, price)


    useEffect(() => {
        fetch('http://localhost:5000/product/' + id)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    return (
        <div>
            <h3>CheckOut</h3>
            <div className="shadow p-3">
                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Total =</td>
                            <td></td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </table>
           
           
            <div className="d-flex justify-content-end">
                <button>CheckOut</button>
            </div>
            </div>
        </div>
    );
};

export default Product;