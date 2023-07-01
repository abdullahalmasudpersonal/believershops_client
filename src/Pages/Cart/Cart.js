import React, { useState } from 'react';
import './Cart.css';
import '../../App.css';
import { removeFromDb } from '../../utilities/fakedb';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../Shared/PageTitle/PageTitle';
import UseCart from '../../Hooks/UseCarts/UseCart';
const Cart = () => {
    const [cart, setCart] = UseCart();
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    /*  const counts = product.quantity; */
    console.log(cart.map(product => product.quantity.toString()))
    // const prevCount =  cart.map(product => product.quantity)
    /* console.log('cart',quantitys, cart.map(product => product.quantity)) */

    const addToDb = _id => {
        let shoppingCart = {};
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        // add quantity
        const quantity = shoppingCart[_id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[_id] = newQuantity;
        }
        else {
            shoppingCart[_id] = 1;

        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    };

    const deleteToDb = _id => {
        let shoppingCart = {};

        //delete the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        // add quantity
        const quantity = shoppingCart[_id];
        if (quantity >1) {
            const deleteQuantity = quantity - 1;
            shoppingCart[_id] = deleteQuantity;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    };


    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    /*     const handleRemoveProductQuantity = product => {
            const rest = cart.filter(pd => pd._id !== product._id);
            setCart(rest);
            deleteToDb(product._id);
        } */

    let quantity = 0;
    let subTotal = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + product.regularPrice * product.quantity;
    }
    const conditionCharge = parseFloat((subTotal * 0.01).toFixed(2));
    const grandTotal = subTotal + conditionCharge;
    /* checkout cart disable */
    const disabled = quantity < 1;

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            if (prevCount < 10) {
                return (prevCount + 1);
            }
            else {
                return (prevCount = 10);
            }
        });
    }
    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    };

    const handleAddToCard = (selectedAttar) => {
        let newCart = [];
        const exists = cart.find(attar => attar._id === selectedAttar._id);
        if (!exists) {
            selectedAttar.quantity = 1;
            newCart = [...cart, selectedAttar];
            /*        toast.success(`Added To Cart ${count}`); */
        }
        else {
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
            /*  toast.warning(`Alrady Added To Cart`); */
        }
        setCart(newCart);
        addToDb(selectedAttar._id);
    };

    const handleDeleteToCard = (selectedAttar) => {
        let newCart = [];
        const exists = cart.find(attar => attar._id === selectedAttar._id);
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = 1 && exists.quantity - 1;
            newCart = [...rest, exists];
            /*  toast.warning(`Alrady Added To Cart`); */
    
        setCart(newCart);
        deleteToDb(selectedAttar._id);
    };


    return (
        <>
            <div className='breadcrumb-bg'>
                <div className='container-xxl'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 ">
                            <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                            {/*     <li class="breadcrumb-item active" aria-current="page">Data</li> */}
                        </ol>
                    </nav>
                </div>
            </div>

            <div className='home-bg py-3'>
                <PageTitle pageTitle='Shopping Cart'></PageTitle>
                <div className='container-xxl cart-bg p-3'>
                    <h4 className='mb-4'>Shopping Cart</h4>
                    <div className='table-responsive-sm'>
                        <table className="table  table-hover">
                            <thead className='cart-table-head'>
                                <tr>
                                    <th scope="col" className='mobile-cart'>Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col" className='mobile-cart'>Model</th>
                                    <th scope="col" className='text-center'>Quantity</th>
                                    <th scope="col" className='text-center'>Remove</th>
                                    <th scope="col" className='text-end mobile-cart'>Unit</th>
                                    <th scope="col" className='text-end'>Total</th>
                                </tr>
                            </thead>
                            <tbody className='cart-table-body'>
                                {
                                    cart.map(product =>

                                        <tr key={product._id}>

                                            <th scope="row" className='mobile-cart'>
                                                <img src={product.image1} alt='' width='50px' height='50px' />
                                            </th>
                                            <td className='align-middle'>{product.name}</td>
                                            <td className='mobile-cart'>{product.model}</td>

                                            <td className='align-middle'>
                                                <div className='d-flex justify-content-center'>
                                                    <div className='attar-detail-quantity-counter'>
                                                        <div className='attar-detail-quantity-counter-p'>
                                                            <p style={{ color: 'gray' }} className='m-0 fw-bold'>
                                                                {count}
                                                            </p>
                                                        </div>
                                                        <div className='d-grid attar-detail-quantity-counter-dev'>
                                                            <button onClick={increment} className='p-0'>
                                                                <i onClick={() => handleAddToCard(product)} style={{ color: 'gray' }} className="fa fa-angle-up px-2 "></i>
                                                            </button>
                                                            <button onClick={decrement} classnamep='p-0' >
                                                                <i onClick={() => handleDeleteToCard(product)} style={{ color: 'gray' }} className="fa fa-angle-down px-2"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='text-center align-middle'>
                                                <button style={{ border: 'none', background: 'none', padding: '0' }} onClick={() => handleRemoveProduct(product)}> <FontAwesomeIcon className='cart-product-remove' icon={faTrashAlt} /></button>
                                            </td>
                                            <td className='text-end mobile-cart align-middle'>{product.regularPrice}</td>
                                            <td className='text-end align-middle'>{product.quantity * product.regularPrice}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className=''>
                        <h6 className='justify-content-end h5 d-flex'> Sub Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{subTotal}<span style={{ fontFamily: "Sans-Serif", fontWeight: 'bold', fontSize: '17px' }}>৳</span></article></h6>
                        <h6 className='justify-content-end h5 d-flex'> Condition Charge: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{conditionCharge}<span style={{ fontFamily: "Sans-Serif", fontWeight: 'bold', fontSize: '17px' }}>৳</span></article></h6>
                        <h6 className='justify-content-end h5 d-flex'>  Grand Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{grandTotal}<span style={{ fontFamily: "Sans-Serif", fontWeight: 'bold', fontSize: '17px' }}>৳</span></article></h6>
                    </div>

                    <div className='d-flex flex-row-reverse mt-4'>
                        <Link to='/checkout'>
                            <button className={disabled ? 'checkout-btn-disabled' : 'checkout-btn'} disabled={quantity < 1}>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;