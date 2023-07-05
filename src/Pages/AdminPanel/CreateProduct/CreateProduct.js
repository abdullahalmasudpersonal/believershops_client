import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './CreateProduct.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Select from 'react-select'


const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputData = [...val]
        inputData[i] = onChangeValue.target.value;
        setVal(inputData)
        console.log('data', val)
    };
    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i, 1)
        setVal(deleteVal)
    }
    console.log(val, 'data')

    const imageStorageKey = 'a3d4bff21c6d258146feb02c43808485';
    const onSubmit = async data => {
        const proseed = window.confirm(`Are you sure Create New Product ?`);
        if (proseed) {
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
                            subCategory: data.subCategory,
                            name: data.name,
                            brand: data.brand,
                            availability: data.availability,
                            price: data.price,
                            ragularPrice: data.ragularPrice,
                            offerPrice: data.offerPrice,
                            description: data.description,
                            description2: val,
                            image1: imgData.data.url 
                        }
                        fetch('http://localhost:5000/products', {
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
        }
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
                            <label>Category</label>
                            <select {...register("category", { required: true })} >
                                <option value='' hidden>Select Category---</option>
                                <option value='Attar'>Attar</option>
                                <option value='Tupis'>Tupis</option>
                                <option value='Jainamaz'>Jainamaz</option>
                                <option value='Tazbeeh'>Tazbeeh</option>
                            </select>
                            <label>Sub Category</label>
                            <select {...register("subCategory", { required: true })} >
                                <option value='' hidden>Select Sub Category---</option>
                                <option value='Popular Attar'>Popular Attar</option>
                                <option value='Mahsez Attar'>Mahsez Attar</option>
                                <option value='Attar Combo Offer'>Attar Combo Offer</option>
                            </select>
                            {/* <input type='text' placeholder='Enter Product Category' {...register("category", { required: true })} /> */}
                            <label>Name</label>
                            <input type='text' placeholder='Enter Product Name' {...register("name", { required: true })} />
                            <label>Brand</label>
                            <input type='text' placeholder='Enter Product Brand' {...register("brand", { required: true })} />
                            <label>Available Quantity</label>
                            <input type='number' placeholder='Enter Product Available Quantity' {...register("availability", { required: true })} />
                            <label>Price</label>
                            <input type='number' placeholder='Enter Product Regular Price' {...register("price", { required: true })} />
                            <label>Ragular Price</label>
                            <input type='number' placeholder='Enter Product Regular Price' {...register("ragularPrice", { required: true })} />
                            <label>Offer Price</label>
                            <input type='number' placeholder='Enter Product Offer Price' {...register("offerPrice", { required: true })} />
                            <label>Description Summary</label>
                            <textarea type='text' placeholder='Enter Product Description-1' {...register("description", { required: true })} />

                            {/* <label>Add Title</label>
                            <input type='number' placeholder='Enter Product Regular Price' {...register("ragularPrice", { required: true })} /> */}

                            <div>
                                <button onClick={() => handleAdd()}>Add</button>
                                {
                                    val.map((data, i) =>
                                        <div key={i}>
                                            <input value={data} onChange={e => handleChange(e, i)} />
                                            <button onClick={() => handleDelete(i)}>Delete</button>
                                        </div>
                                    )
                                }
                            </div>

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