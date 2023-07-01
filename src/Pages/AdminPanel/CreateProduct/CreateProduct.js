import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './CreateProduct.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = 'a3d4bff21c6d258146feb02c43808485';

    const onSubmit = async data => {
        const image = data.image1[0];
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
                    //  const img = imgData.data.url;
                    const newPorduct = {
                        category: data.category,
                        name: data.name,
                        brand: data.brand,
                        availability: data.availability,
                        ragularPrice: data.ragularPrice,
                        offerPrice: data.offerPrice,
                        description: data.description,
                        image1: imgData.data.url
                    }
                    fetch('https://mahsez-server.onrender.com/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newPorduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                         //   console.log('inser', inserted)
                            if (inserted.insertedId) {
                                toast.success('Added New Product');
                                reset();
                            }
                            else {
                                toast.error('Faield to Added New Product')
                            }
                        })
                }
            });
    };

    return (
        <>
            <div className='dashboard-dev2'>
                <PageTitle pageTitle='Create Product |' />
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Create Product</h4>
                </div>
                <hr />
                <div className='create-product-dev mt-5 mb-5'>
                    <h4 className='text-center mb-4 pt-4'>Create Product</h4>
                    <div className='pb-4'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' placeholder='Enter Product Category' {...register("category", { required: true })} />

                            <input type='text' placeholder='Enter Product Name' {...register("name", { required: true })} />

                            <input type='text' placeholder='Enter Product Brand' {...register("brand", { required: true })} />

                            <input type='number' placeholder='Enter Product Available Quantity' {...register("availability", { required: true })} />

                            <input type='number' placeholder='Enter Product Regular Price' {...register("ragularPrice", { required: true })} />

                            <input type='number' placeholder='Enter Product Offer Price' {...register("offerPrice", { required: true })} />

                            <input type='text' placeholder='Enter Product Description-1' {...register("description", { required: true })} />

                            {/*                         <input type='text' placeholder='Enter Product Description-2' {...register("description", { required: true })} />

                        <input type='text' placeholder='Enter Product Description-3' {...register("description", { required: true })} /> */}

                            <input className='' type="file" {...register("image1", {
                                required: "Photo is Required"
                            })} />

                            <input type='Submit' value='Add Product' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;