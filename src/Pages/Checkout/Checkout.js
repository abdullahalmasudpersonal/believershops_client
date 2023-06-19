import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Checkout.css';
import bkash from '../../Assets/img/payment/bkash.png';
import nagod from '../../Assets/img/payment/nagod.png';
import rocket from '../../Assets/img/payment/rocket.png';
import sureCash from '../../Assets/img/payment/sureCash.png';
import UseCart from '../Cart/UseCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { deleteShoppingCart } from '../../utilities/fakedb';
import UseAllOrders from '../../Hooks/UseAllOrders/UseAllOrders';
import District from './District';

const Checkout = (allOrderId) => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = UseCart();
    const [shipping, setShipping] = useState();
    const [allorders] = UseAllOrders([]);
    const navigate = useNavigate();
    const [paymentType, setPaymentType] = useState('cashOnDelivery');
    const [selected, setSelected] = useState("males");

    const changeHandler = e => {
        setSelected(e.target.value);
    };

    /* navigate to order view */
    const navigateToOrderView = _id => {
        navigate(`/dashboard/myOrders`);
    };

    console.log('cart', cart.map(product => product))

    /* Order status */
    const orderStatus = 'Pending';
    /* Create Order Number */
    const orderNumber = allorders.length;
    /* ----------- handle place order ------------- */
    const handlePlaceOrder = event => {
        event.preventDefault();
        const allOrder = {
            orderNo: orderNumber,
            coustomerName: user.displayName,
            email: user.email,
            phoneNumber: event.target.phoneNumber.value,
            districtName: event.target.district_name.value,
            address: event.target.address.value,
            comment: event.target.comment.value,
            shippingCharge: shipping,
            orderTime: cTime,
            orderDate: cDate,
            status: orderStatus,
            cart: (cart),
            productsId: (cart.map(porduct => porduct._id)),
            productsName: (cart.map(porduct => porduct.name)),
            productsImage: (cart.map(porduct => porduct.image1)),
            productsQuantity: (cart.map(porduct => porduct.quantity)),
            productsPrice: (cart.map(porduct => porduct.offerPrice)),
            productsTotalPrice: (cart.map(porduct => porduct.offerPrice * porduct.quantity)),
            grandTotal: grandTotal
        }

        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.post('http://localhost:5000/allOrder', allOrder)
                .then(response => {
                    const { data } = response;
                    if (data.insertedId) {
                        toast.success('Your order is placed !!!');

                        event.target.reset();
                        deleteShoppingCart();
                        navigateToOrderView();
                    }
                });
        };
    };

    /* load cart */
    let deliveryCharge = 60;
    let quantity = 0;
    let subTotal = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + product.regularPrice * product.quantity;
    }
    const conditionCharge = parseFloat((subTotal * 0.01).toFixed(2));
    const grandTotal = subTotal + conditionCharge + deliveryCharge;

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

    /*  Importent --- week name with date
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    var now = today.toLocaleString('en-US', options);
    console.log(now);
    */
    const [district, setDistrict] = useState();

    return (
        <div className='container-xxl my-5'>
            <h3 className='mb-4'>Checkout</h3>
            <form onSubmit={handlePlaceOrder}>

                <div className='checkout'>

                    <div className='checkout-user-info p-3'>
                        <h5><span>1</span> Coustomer info</h5>
                        <hr />
                        <div>
                            <p className='mb-0'><small>Full Name</small></p>
                            <input type='text' name='firstName' value={user.displayName} disabled />
                        </div>
                        <div>
                            <p className='mb-0'><small>Email Address</small></p>
                            <input value={user.email} disabled required />
                        </div>
                        <div>
                            <p className='mb-0'><small>Phone Number*</small></p>
                            <input type='number' name='phoneNumber' required />
                        </div>
                        <div>
                            <p className='mb-0'><small>Select District*</small></p>
                            <input type='text' name='district_name' required />
                        </div>
                        <div>
                            <p className='mb-0'><small>Select District*</small></p>
                            <select value={district} onChange={e => setDistrict(e.target.value)}>
                                <District />
                            </select>
                        </div>
                        <div>
                            <p className='mb-0'><small>Full  Address*</small></p>
                            <input type='text' name='address' required />
                        </div>
                        <div>
                            <p className='mb-0'><small>Commects</small></p>
                            <textarea type='text' name='comment' />
                        </div>
                    </div>

                    <div>
                        <div className='gap-4 cehckout-payment-delivery'>
                            <div className='checkout-payment-method p-3'>
                                <h5><span>2</span> Payment Method</h5>
                                <hr />
                                <h6>Select one payment method</h6>
                                <div>

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="males"
                                        id="males"
                                        checked={selected === "males"}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="males">Males</label><br />

                                    <div tabIndex="0" aria-hidden={selected !== "males" ? true : false}>
                                        This is males Div
                                        <input />
                                    </div>

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                        checked={selected === "male"}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="male">Male</label><br />

                                    <div tabIndex="0" aria-hidden={selected !== "male" ? true : false}>
                                        This is male Div
                                        <input />
                                    </div>

                                    <input
                                        type="radio"
                                        value="female"
                                        id="female"
                                        checked={selected === "female"}
                                        name="gender"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="female">Female</label>

                                    {/* <div tabIndex="0" aria-hidden={selected !== "female" ? true : false}>
                                        This is female Div
                                    </div>
                                    <ul style={{ listStyleType: 'none' }} className="  mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <input style={{ display: 'inline' }} type='radio' name='paymentType' className="nav-link active" id="cashOnDelivery" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" checked={paymentType === 'cashOnDelivery'} value='cashOnDelivery' />
                                            <label>&nbsp;Cash on Delivery</label>
                                        </li>
                                        <li className="nav-item" role="presentation">

                                            <input style={{ display: 'inline-block' }} type='radio' name='paymentType' className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" value='Bkash' />
                                            <label>&nbsp;Bkash</label>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <input style={{ display: 'inline-block' }} type='radio' name='paymentType' className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" value='Nagod' />
                                            <label>&nbsp;Nagod</label>
                                        </li>
                                    </ul> 
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="cashOnDelivery">aaaa</div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">bbb</div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">ccc</div>
                                    </div>*/}
                                </div>
                            </div>

                            <div className='checkout-payment-method p-3'>
                                <h5><span>3</span> Shipping Charge</h5>
                                <hr />
                                <h6>Select shipping area</h6>
                                <div>
                                    <div>
                                        <input type='radio' name='shipping' value='Outside of Dhaka 100৳' onChange={e => setShipping(e.target.value)} required />
                                        <label>&nbsp;Outside of Dhaka 100৳</label>
                                    </div>
                                    <div>
                                        <input type='radio' name='shipping' value='Inside of Dhaka 60৳' onChange={e => setShipping(e.target.value)} />
                                        <label>&nbsp;OInside of Dhaka 60৳</label>
                                    </div>
                                    {shipping}
                                    <p>{cTime}__ {cDate}</p>
                                    <p>orderNumber {orderNumber}</p>
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
                                    {
                                        cart.map(product =>

                                            <tr key={product._id}>
                                                <td>{product.name}</td>
                                                <td className='text-center'>
                                                    {product.quantity}
                                                </td>
                                                <td className='text-end'>{product.regularPrice}</td>
                                                <td className='text-end'>{product.quantity * product.regularPrice}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <h6 className='text-end h5'>Sub Total: {subTotal} <span>Tk</span></h6>
                                <h6 className='text-end h5'>Condition Charge: {conditionCharge} <span>Tk</span></h6>
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
    );
};

export default Checkout;
