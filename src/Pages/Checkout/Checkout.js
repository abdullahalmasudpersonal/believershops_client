import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Checkout.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import UseAllOrders from '../../Hooks/UseAllOrders/UseAllOrders';
import District from './District';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import UseCart from '../../Hooks/UseCarts/UseCart';
import { Form } from 'react-bootstrap';
import AppContext from '../../Context/AppContext';

const Checkout = (allOrderId) => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [cart, setCart] = UseCart();
    const [shipping, setShipping] = useState();
    const [payment, setPayment] = useState();
    const [paymentShow, setPaymentShow] = useState();

    // console.log(payment)
    const [district, setDistrict] = useState('default');
    const [allorders] = UseAllOrders([]);
    const navigate = useNavigate();

    /* navigate to order view */
    const navigateToOrderView = _id => {
        navigate(`/dashboard/myOrders`);
    };

    /* Order status */
    const orderStatus = 'Pending Order';
    /* Create Order Number */
    const orderNumber = allorders.length + 1;
    /* ----------- handle place order ------------- */
    const handlePlaceOrder = event => {
        event.preventDefault();
        const allOrder = {
            orderNo: orderNumber,
            coustomerName: event.target.fullName.value,
            email: user.email,
            orderEmail: event.target.email.value,
            phoneNumber: event.target.phoneNumber.value,
            districtName: district,
            address: event.target.address.value,
            comment: event.target.comment.value,
            paymentStatus: payment,
            paymentNumber: event.target.paymentNumber.value,
            paymentTransaction: event.target.paymentTransaction.value,
            shippingCharge: shipping,
            orderTime: cTime,
            orderDate: cDate,
            status: orderStatus,
            pendingOrderStatus: orderStatus,
            productsId: (cart.map(porduct => porduct._id)),
            productsName: (cart.map(porduct => porduct.name)),
            productsImage: (cart.map(porduct => porduct.image1)),
            productsQuantity: (cart.map(porduct => porduct.quantity)),
            productsPrice: (cart.map(porduct => porduct.offerPrice)),
            productsTotalPrice: (cart.map(porduct => porduct.offerPrice * porduct.quantity)),
            subTotal: subTotal,
            deliveryCharge: deliveryCharge,
            grandTotal: grandTotal
        }

        const proceed = window.confirm('Are you sure place order !!!')
        if (proceed) {
            axios.post('https://mahsez-server.vercel.app/api/v1/myOrders', allOrder)
                .then(response => {
                    const { data } = response;
                    // console.log(data.insertedId)
                    if (data.insertedId) {
                        toast.success('Your order is placed !!!');
                        event.target.reset();
                        navigateToOrderView();
                    }
                });
        };
    };

    /* load cart */
    let quantity = 0;
    let subTotal = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + (product.offerPrice ? product.offerPrice : product.ragularPrice) * product.quantity;
    }
    const deliveryCharge = shipping * 1;
    const grandTotal = subTotal + deliveryCharge;

    /* get time & date */
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    //  const [cDate, setCDate] = useState(date);
    const [cTime, setCTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    };
    setInterval(updateTime, 1000);

    /* date width month */
    var today = new Date();
    var optionss = { year: 'numeric', month: 'long', day: 'numeric' };
    var cDates = today.toLocaleString('en-US', optionss);
    const cDate = cDates;

    return (
        <>
            <div className='breadcrumb-bg'>
                <div className='container-xxl'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 ">
                            <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
                            <li class="breadcrumb-item"><Link to='/shopping_cart' className='breadcrumbItem'>Shopping Cart</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='home-bg'>
                <div className='container-xxl checkout-top'>
                    <PageTitle pageTitle='Checkout' />
                    <h3 className='mb-3'>Checkout</h3>
                    <form onSubmit={handlePlaceOrder}>
                        <div className='checkout'>
                            <div className='checkout-user-info p-3'>
                                <h5><span>1</span> Coustomer info</h5>
                                <hr />
                                <div>
                                    <p className='mb-0'><small>Full Name*</small></p>
                                    <input type='text' placeholder='Full Name' name='fullName' defaultValue={user.displayName} required />
                                </div>
                                <div>
                                    <p className='mb-0'><small>Email Address*</small></p>
                                    <input placeholder='Email' name='email' defaultValue={user.email} required />
                                </div>
                                <div>
                                    <p className='mb-0'><small>Select District*</small></p>
                                    <select value={district} onChange={e => setDistrict(e.target.value)} required>
                                        <District />
                                    </select>
                                </div>
                                <div>
                                    <p className='mb-0'><small>Phone Number*</small></p>
                                    <input type='number' name='phoneNumber'
                                        onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                                        required />
                                </div>
                                <div>
                                    <p className='mb-0'><small>Full  Address*</small></p>
                                    <input type='text' name='address' required />
                                </div>
                                <div>
                                    <p className='mb-0'><small>Commects</small></p>
                                    <textarea type='text' maxLength='120' name='comment' />
                                </div>
                            </div>

                            <div>
                                <div className='gap-4 cehckout-payment-delivery'>

                                    <div className='checkout-payment-method p-3'>
                                        <h5><span>2</span> Payment Method</h5>
                                        <hr />
                                        <h6>Select one payment method</h6>
                                        <div>
                                            <div>
                                                <input id='cashDelivery' type='radio' name='payment' value='Cash On Delivery' onChange={e => setPayment(e.target.value)} required />
                                                <label for='cashDelivery'>&nbsp;Cash On Delivery</label>
                                            </div>
                                            <div>
                                                <input id='bkash' type='radio' name='payment' value='Bkash' onChange={e => setPayment(e.target.value)} />
                                                <label for='bkash'>&nbsp;Bkash</label>
                                            </div>
                                            <div>
                                                <input id='nagod' type='radio' name='payment' value='Nagod' onChange={e => setPayment(e.target.value)} />
                                                <label for='nagod'>&nbsp;Nagod</label>
                                            </div>
                                            <div>
                                                <input id='rocket' type='radio' name='payment' value='Rocket' onChange={e => setPayment(e.target.value)} />
                                                <label for='rocket'>&nbsp;Rocket</label>
                                            </div>
                                            
                                                <div div >
                                                    <p className='lh-lg m-1'>বিকাশ/নগদ/রকেট থেকে টাকা প্রদান করার জন্য বিকাশ/নগদ/রকেটের App এর মাধ্যমে অথবা সরাসরি বিকাশ এর জন্য *247#, নগদ এর জন্য *167#, রকেট এর জন্য *322# ডায়াল করে "Send Money" অপশনটি সিলেক্ট করুন। আমাদের বিকাশ/নগদ/রকেট পার্সোনাল নাম্বার "01737906772" এ আপনার মোট বিল প্রদান করুন। <br /> বিঃদ্রঃ শুধুমাত্র "সেন্ড মানি" অপশন এর মাধ্যমে বিল পরিশোধ করতে হবে</p>
                                                    <div className='mb-2'>
                                                        <label><small>Enter bkash/Nagod/Rocket Number</small></label><br />
                                                        <input type='number' placeholder='Payment Number 01XXXXXXXXX' name='paymentNumber' onInput={(e) => e.target.value = e.target.value.slice(0, 11)} className='mt-1 p-1' style={{ outline: 'none', width: '250px' }} required={payment !== 'Cash On Delivery'} />
                                                    </div>
                                                    <div>
                                                        <label><small>Enter Transaction ID</small></label><br />
                                                        <input type='text' maxLength='30' placeholder='Transaction ID A86XXXXXXXX' name='paymentTransaction' className='mt-1 p-1' style={{ outline: 'none', width: '250px' }} required={payment !== 'Cash On Delivery'} />
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                    <div className='checkout-shipping-method p-3'>
                                        <h5><span>3</span> Shipping Charge</h5>
                                        <hr />
                                        <h6>Select shipping area</h6>
                                        <div>
                                            <div>
                                                <input id='inside-dhaka' type='radio' name='shipping' value='60' onChange={e => setShipping(e.target.value)} />
                                                <label for='inside-dhaka'>&nbsp;InSide of Dhaka 60৳</label>
                                            </div>
                                            <div>
                                                <input id='outside-dhaka' type='radio' name='shipping' value='100' onChange={e => setShipping(e.target.value)} required />
                                                <label for='outside-dhaka'>&nbsp;OutSide of Dhaka 100৳</label>
                                            </div>
                                            {shipping} <p>{cTime}__ {cDate}</p> <p>orderNumber {orderNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 p-3 checkout-order-info'>
                                    <h5><span>4</span> Order Overview</h5>
                                    <hr />
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col" className='text-center'>Quantity</th>
                                                <th scope="col" className='text-end'>Unit Price</th>
                                                <th scope="col" className='text-end'>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(product =>
                                                <tr key={product._id}>
                                                    <td>{product.name}</td>
                                                    <td className='text-center'>
                                                        {product.quantity}
                                                    </td>
                                                    <td className='text-end'>{product.offerPrice ? product.offerPrice : product.ragularPrice}</td>
                                                    <td className='text-end'>{product.quantity * (product.offerPrice ? product.offerPrice : product.regularPrice)}</td>
                                                </tr>)}
                                        </tbody>
                                    </table>
                                    <div>
                                        <h6 className='text-end h5'>Sub Total: {subTotal} <span>Tk</span></h6>
                                        <h6 className='text-end h5'>Home Delivery: {deliveryCharge} <span>Tk</span></h6>
                                        <h6 className='text-end h5 fw-bold'> Grand Total: {grandTotal} Tk</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-4'></hr>
                        <div className='place-order-btn'>
                            <button type='submit'>Place Order</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};

export default Checkout;
