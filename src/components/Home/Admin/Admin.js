import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import DeleteProduct from '../../DeleteProduct/DeleteProduct';
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    console.log(imageURL)


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c27cdbd7f672caa5d177ddecda022824');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div className="row">
            <div className="col-md-6 shadow p-2   mt-3">
                <DeleteProduct></DeleteProduct>
            </div>
            <div className="col-md-6 shadow p-3 mt-3">
                <h3 className="text-success">Add product:</h3>
                <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="upload new product" ref={register} />
                    <br />
                    <input name="price" defaultValue="set product price" ref={register} />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />


                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;