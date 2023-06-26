import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../../../Hooks/UseProductDetails/UseProductDetails';
import './UpdateProductInfo.css';

const UpdateProductInfo = () => {
  const { productId } = useParams();
  const [productDetails] = UseProductDetails(productId);
  const { _id, name, category, brand, stockStatus, availableQuantity, price, regularPrice, offerPrice, description, size, image1 } = productDetails;

  const handleUpdateProduct = event => {
    event.preventDefault();
    const updateproduct = {
      
    }
    fetch(`http://localhost:5000/products/${_id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
       // console.log(data)
      })
  }


  /*   const cancelOrderStatus = () => {
      fetch(`http://localhost:5000/cancelOrderStatus/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
        .then(data => {
           console.log(data);
        })
    };
   */

  return (
    <div className='dashboard-dev2 p-2'>
      <h4 className='text-center mt-3'>Update Product Info</h4>
      <div className='p-2 pt-4 updateProductInfo'>
        <div>
          <img src={image1} width='200px' height='200px' />
        </div>
        <form onSubmit={handleUpdateProduct}>
          <div>
            <label>Name : <span>{name}</span></label>&nbsp;
            <input type='text' placeholder='Name' name='name' defaultValue={name} />
          </div>
          <div>
            <label>Category : <span>{category}</span></label>&nbsp;
            <input type='text' placeholder='Category' name='category' defaultValue={category} />
          </div>
          <div>
            <label>Brand : <span>{brand}</span></label>&nbsp;
            <input type='text' placeholder='Brand' name='' defaultValue={brand} />
          </div>
          <div>
            <label>StockStatus : <span>{stockStatus} / Out Of Stock</span></label>&nbsp;
            <input type='text' placeholder='StockStatus' name='stockStatus' defaultValue={stockStatus} />
          </div>
          <div>
            <label>AvailableQuantity : <span>{availableQuantity} Pcs</span></label>&nbsp;
            <input type='number' placeholder='Available Quantity' name='availableQuantity' defaultValue={availableQuantity} />
          </div>
          <div>
            <label>Price : <span>{price}</span></label>&nbsp;
            <input type='number' placeholder='Name' name='' defaultValue={price} />
          </div>
          <div>
            <label>Regular Price : <span>{regularPrice}</span></label>&nbsp;
            <input type='number' placeholder='Name' name='' defaultValue={regularPrice} />
          </div>
          <div>
            <label>Offer Price : <span>{offerPrice}</span></label>&nbsp;
            <input type='number' placeholder='Name' name='' defaultValue={offerPrice} />
          </div>
          <div>
            <label>Description : <span>{description}</span></label>&nbsp;
            <textarea type='text' placeholder='Name' name='' defaultValue={description} />
          </div>
          <div>
            <label>Size : <span>{size}</span></label>&nbsp;
            <input type='text' placeholder='Name' name='' defaultValue={size} />
          </div>

          <div>
            {/*  <input type='submit' value='Update Prodcut' /> */}
            <button type='submit'>Update Prodcut</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductInfo;