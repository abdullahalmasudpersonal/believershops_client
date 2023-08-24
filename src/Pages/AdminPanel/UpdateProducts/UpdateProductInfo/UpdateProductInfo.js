import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../../../Hooks/UseProductDetails/UseProductDetails';
import './UpdateProductInfo.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { categoriesData } from '../../CreateProduct/CreateCategoreData';

const UpdateProductInfo = () => {
  const [mainCategory, setMainCategory] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  /* refetch update porduct */
  const { register, handleSubmit, reset, } = useForm();
  const { productId } = useParams();
  const [productDetails, setProductDetails] = UseProductDetails(productId);
  const { _id, name, brand, stockStatus, availableQuantity, ragularPrice, offerPrice, description, size, image1 } = productDetails;

  const changeCountry = (event) => {
    setMainCategory(event.target.value);
    setCategories(categoriesData.find(ctr => ctr.name === event.target.value).categories);
  };
  const changeState = (event) => {
    setCategory(event.target.value);
    setSubCategories(categories.find(state => state.name === event.target.value).subCategories);
  };
  const handleCity = (event) => {
    setSubCategory(event.target.value);
  };

  const handleUpdateProduct = async data => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const updateproduct = {
        mainCategory: mainCategory,
        category: category,
        subCategory: subCategory,
        name: data.name,
        brand: data.brand,
        stockStatus: data.stockStatus,
        availableQuantity: data.availableQuantity,
        ragularPrice: data.ragularPrice,
        offerPrice: data.offerPrice
      }
      fetch(`http://localhost:5000/products/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updateproduct)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            toast.success(`Successfully Updated '${name}'`);
            reset();
            window.location.reload(false);
          }
          else {
            toast.error(`Faield to update '${name}'`);
          }
        })
    }
  };

  return (
    <div className='dashboard-dev2'>
      <PageTitle pageTitle={`${name} | Update Product Info |`} />
      <div className='pt-4 px-4 d-flex justify-content-between'>
        <h4 className='fw-bold side-header'>Update Product Info <span style={{ color: 'orange' }}>({name})</span></h4>
      </div>
      <hr className='mb-0' />
      <div>
        <img src={image1} width='200px' height='200px' alt='' className='mb-3' />
      </div>
      <form onSubmit={handleSubmit(handleUpdateProduct)} className='updateProductInfo-form'>
        <div className='updateProductInfo'>
          <div>
            <label>Main Category : <span>{productDetails.mainCategory}</span></label>&nbsp;<br />
            <select value={mainCategory} onChange={changeCountry} key={mainCategory} >
              <option value='' hidden>Main Category---</option>
              {categoriesData.map(ctr => (
                <option value={ctr.name}>{ctr.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Category : <span>{productDetails.category}</span></label>&nbsp;<br />
            <select value={category} onChange={changeState}>
              <option value='' hidden>Category ---</option>
              {
                categories.map(state => (
                  <option value={state.value}>{state.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Sub Category : <span>{productDetails.subCategory}</span></label>&nbsp;<br />
            <select value={subCategory} onChange={handleCity}>
              <option value='' hidden>Sub Category ---</option>
              {
                subCategories.map(city => (
                  <option value={city}>{city}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Brand : <span>{brand}</span></label>&nbsp;<br />
            <select {...register("brand", { required: false })}>
              <option value="" hidden>Brand ---</option>
              <option value="No Brand">No Brand</option>
              <option value="Mahsez">Mahsez</option>
              <option value="Alif Attar">Alif Attar</option>
            </select>
          </div>
          <div>
            <label>StockStatus : <span>{stockStatus} </span></label>&nbsp;<br />
            <select {...register("stockStatus", { required: false })}>
              <option value="" hidden>Stock Status ---</option>
              <option value="In Stock">In Stock</option>
              <option value="Out Of Stock">Out Of Stock</option>
            </select>
          </div>
          <div className=''>
            <label>Name : <span>{name}</span></label>&nbsp;<br />
            <input type='text' defaultValue={name} {...register("name", { required: false })} />
          </div>
          <div>
            <label>AvailableQuantity : <span>{availableQuantity} Pcs</span></label>&nbsp;<br />
            <input type='number' defaultValue={availableQuantity} {...register("availableQuantity", { required: false })} />
          </div>
          <div>
            <label>Regular Price : <span>{ragularPrice} Tk</span></label>&nbsp;<br />
            <input type='number' defaultValue={ragularPrice} {...register("ragularPrice", { required: false })} />
          </div>
          <div>
            <label>Offer Price : <span>{offerPrice} Tk</span></label>&nbsp;<br />
            <input type='number' defaultValue={offerPrice} {...register("offerPrice", { required: false })} />
          </div>
          <div>
            <label>Size : <span>{size}</span></label>&nbsp;<br />
            <input type='text'  {...register("price", { required: false })} />
          </div>
          <div>
            <label>Description : <span>{/* {description} */}</span></label>&nbsp;<br />
            <textarea type='text'  {...register("price", { required: false })} />
          </div>
          <div>
            <button type='submit' className='updateProductBtn'>Update Prodcut</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductInfo;