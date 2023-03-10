import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../../../../CreateProductCSS/CreateProductCSS.css';

const CreateAttar = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = process.env.REACT_APP_imgbb_key;

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // const img = imgData.data.url;
                    const newAttar = {
                        name: data.name,
                        brand: data.brand,
                        availability: data.availability,
                        ragularPrice: data.ragularPrice,
                        offerPrice: data.offerPrice,
                        description: data.description,
                        img: imgData.data.url
                    }
                    fetch('https://mahsez-server.onrender.com/attars', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newAttar)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Added New Attar');
                                reset();
                            }
                            else {
                                toast.error('Faield to Added New Attar')
                            }
                        })
                }
            })

        /*         const url = `https://mahsez-server.onrender.com/attars`;
                fetch(url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(result => {
                    toast.success('Added Attar')
                    e.target.reset();
                }) */
    };

    return (
        <div className='m-5 create-product'>
            <div className='create-product-dev pb-2'>
                <h4 className='text-center mb-4 pt-4'>Create Attar</h4>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' placeholder='Enter Product Name' {...register("name", { required: true })} />

                        <input type='text' placeholder='Enter Product Brand' {...register("brand", { required: true })} />

                        <input type='number' placeholder='Enter Product Available Quantity' {...register("availability", { required: true })} />

                        <input type='number' placeholder='Enter Product Regular Price' {...register("ragularPrice", { required: true })} />

                        <input type='number' placeholder='Enter Product Offer Price' {...register("offerPrice", { required: true })} />

                        <input type='text' placeholder='Enter Product Description-1' {...register("description", { required: true })} />

                        <input type='text' placeholder='Enter Product Description-2' {...register("description", { required: true })} />

                        <input type='text' placeholder='Enter Product Description-3' {...register("description", { required: true })} />

                        <input className='' type="file" {...register("image", {
                            required: "Photo is Required"
                        })} />

                        <input type='Submit' value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAttar;