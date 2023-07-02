import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../../../Hooks/UseProductDetails/UseProductDetails';
import './UpdateProductInfo.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateProductInfo = () => {
  const { productId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [productDetails, setProductDetails] = UseProductDetails(productId);
  const { _id, name, category, brand, stockStatus, availability, ragularPrice, offerPrice, description, size, image1 } = productDetails;

  const handleUpdateProduct = async data => {
    const updateproduct = {
      category: data.category,
      name: data.name,
      brand: data.brand,
      stockStatus: data.stockStatus,
      availability: data.availability,
      ragularPrice: data.ragularPrice,
      offerPrice: data.offerPrice
    }
    console.log('data', updateproduct)
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
        /* console.log(data) */
        if (data) {
          toast.success(`Successfully Updated '${name}'`);
          reset();
          /* const remaining = productDetails.map(service => service._id !== _id);
          setProductDetails(remaining); */
        }
        else {
          toast.error(`Faield to update '${name}'`);
        }
      })
  };

  /*   const handleConfirmOrderStatus = () => {
      fetch(`http://localhost:5000/products/${_id}`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }; */

  return (
    <div className='dashboard-dev2 p-2'>
      <PageTitle pageTitle={`${name} | Update Product Info |`} />
      <h4 className='text-center mt-3'>Update Product Info</h4>
      <div className='p-2 pt-4 updateProductInfo'>
        <div>
          <img src={image1} width='200px' height='200px' alt='' className='mb-3' />
        </div>
        <form onSubmit={handleSubmit(handleUpdateProduct)}>
          <div>
            <label>Name : <span>{name}</span></label>&nbsp;<br />
            <input type='text'defaultValue={name} {...register("name", { required: false })} />
          </div>
          <div>
            <label>Category : <span>{category}</span></label>&nbsp;<br />
            <input type='text' defaultValue={category}  {...register("category", { required: false })} />
          </div>
          <div>
            <label>Brand : <span>{brand}</span></label>&nbsp;<br />
            <input type='text' defaultValue={brand} {...register("brand", { required: false })} />
          </div>
          <div>
            <label>StockStatus : <span>{stockStatus}</span></label>&nbsp;<br />
            <input type='text' defaultValue={stockStatus}  {...register("stockStatus", { required: false })} />
          </div>
          <div>
            <label>AvailableQuantity : <span>{availability} Pcs</span></label>&nbsp;<br />
            <input type='number' defaultValue={availability} {...register("availability", { required: false })} />
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
            <label>Description : <span>{description}</span></label>&nbsp;<br />
            <textarea type='text'  {...register("price", { required: false })} />
          </div>

          <div>
            <button type='submit'>Update Prodcut</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductInfo;