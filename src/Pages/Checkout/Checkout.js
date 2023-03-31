import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import bkash from '../../Assets/img/payment/bkash.png';
import nagod from '../../Assets/img/payment/nagod.png';
import rocket from '../../Assets/img/payment/rocket.png';
import sureCash from '../../Assets/img/payment/sureCash.png';
import UseCart from '../Cart/UseCart';

const Checkout = () => {
    const [cart, setCart] = UseCart();
    let quantity = 0;
    let subTotal = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + product.regular_price * product.quantity;
    }
    const conditionCharge = parseFloat((subTotal * 0.01).toFixed(2));
    const grandTotal = subTotal + conditionCharge;

    /*     let radioBtns = document.querySelectorAll("input[name='payType']");
    
        let payResult = document.getElementById('payResult');
    
        let findSelected = () => {
            let selected = document.querySelector("input[name='payType']:checked").value;
            payResult.textContent = `Value:${selected}`;
        }
    
        radioBtns.forEach(radioBtn => {
            radioBtn.addEventListener("change", findSelected);
        });
        findSelected(); */

    const [payType, setPayType] = useState();


    return (
        <div className='container-xxl my-5'>
            <h3 className='mb-4'>Checkout</h3>
            <form>

                <div className='d-flex gap-4 aligin-items-center justify-content-center'>

                    <div className='checkout-user-info p-3'>
                        <h5><span>1</span> Coustomer info</h5>
                        <hr />
                        <div className='d-flex gap-3'>
                            <div>
                                <p className='mb-0'><small>First Name*</small></p>
                                <input />
                            </div>
                            <div>
                                <p className='mb-0'><small>Lust Name*</small></p>
                                <input />
                            </div>
                        </div>
                        <div>
                            <p className='mb-0'><small>Email Address*</small></p>
                            <input />
                        </div>
                        <div>
                            <p className='mb-0'><small>Phone Number*</small></p>
                            <input />
                        </div>
                        <div>
                            <p className='mb-0'><small>Full  Address*</small></p>
                            <input />
                        </div>
                        <div>
                            <p className='mb-0'><small>Commects</small></p>
                            <textarea />
                        </div>
                    </div>

                    <div>
                        <div className='d-flex gap-4'>
                            <div className='checkout-payment-method p-3'>
                                <h5><span>2</span> Payment Method</h5>
                                <hr />
                                <h6>Select one payment method</h6>
                                <div>
                                    <input type='radio' name='payType' value='masud' onChange={e => setPayType(e.target.value)} Checkout />

                                    <input type='radio' name='payType' value='masud2' onChange={e => setPayType(e.target.value)} />
                                    <input type='radio' name='payType' value='masud3' onChange={e => setPayType(e.target.value)} />
                                    {payType}
                                    <p>বিকাশে টাকা প্রদান করার জন্য বিকাশ App এর মাধ্যমে অথবা সরাসরি *247# ডায়াল করে "Send Money (সেন্ড মানি)" অপশনটি সিলেক্ট করুন।

                                        আমাদের বিকাশ নাম্বার "01620327692" এ আপনার মোট বিল প্রদান করুন।

                                        বিঃদ্রঃ শুধুমাত্র "সেন্ড মানি" অপশন এর মাধ্যমে বিল পরিশোধ করতে হবে

                                        bKash Personal Number : 01620327692</p>
                                </div>
                            </div>

                            <div className='checkout-payment-method p-3'>
                                <h5><span>2</span> Payment Method</h5>
                                <hr />
                                <h6>Select one payment method</h6>
                                <div>
                                    <input type='radio' name='payType' value='masud' onChange={e => setPayType(e.target.value)} Checkout />

                                    <input type='radio' name='payType' value='masud2' onChange={e => setPayType(e.target.value)} />
                                    <input type='radio' name='payType' value='masud3' onChange={e => setPayType(e.target.value)} />

                                    {payType}
                                    <p>বিকাশে টাকা প্রদান করার জন্য বিকাশ App এর মাধ্যমে অথবা সরাসরি *247# ডায়াল করে "Send Money (সেন্ড মানি)" অপশনটি সিলেক্ট করুন।

                                        আমাদের বিকাশ নাম্বার "01620327692" এ আপনার মোট বিল প্রদান করুন।

                                        বিঃদ্রঃ শুধুমাত্র "সেন্ড মানি" অপশন এর মাধ্যমে বিল পরিশোধ করতে হবে

                                        bKash Personal Number : 01620327692</p>

                                </div>

                            </div>
                        </div>

                        <div className='mt-4 p-3 checkout-order-info'>
                            <h5><span>4</span> Coustomer info</h5>
                            <hr />
                            <table class="table table-responsive-sm">
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

                                            <tr>
                                                <td>{product.name}</td>
                                                <td className='text-center'>
                                                    {product.quantity}
                                                </td>
                                                <td className='text-end'>{product.regular_price}</td>
                                                <td className='text-end'>{product.quantity * product.regular_price}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <h6 className='text-end'>Sub Total: {subTotal}</h6>
                                <h6 className='text-end'>Condition Charge: {conditionCharge}</h6>
                                <h5 className='text-end'> Grand Total: {grandTotal}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-4'></hr>
                <div className='place-order-btn'>
                    <button>Place Order</button>
                </div>
            </form>
        </div >
    );
};

export default Checkout;


/*   <div className='mt-3'>
                            <h6>We Accept</h6>
                            <div className='footer-payment-cart'>
                                <img src={bkash} alt='' />
                                <img src={nagod} alt='' />
                                <img src={rocket} alt='' />
                                <img src={sureCash} alt='' />
                            </div>
                        </div> */