import React from 'react';
import './AddShippingAddress.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const AddShippingAddress = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const navigateToAddress = () => {
        navigate(`/dashboard/address`)
    };

    const handleSubmitAddress = async data => {
        const newAddress = {
            email: user.email,
            coustomerName: data.name,
            companyName: data.companyName,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            postCode: data.postCode,
            state: data.state,
            phoneNumber: data.phoneNumber
        };
        fetch('https://mahsez-server.vercel.app/api/v1/address', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newAddress)
        })
            .then(res => res.json())
            .then(inserted => {
              //  console.log(inserted)
                if (inserted.insertedId) {
                    toast.success('Added New Address');
                    reset();
                    navigateToAddress();
                }
                else {
                    toast.error('Faield to Add New Address');
                }
            });
    };

    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle="Add Shipping Address |" />
            <div className='pt-4 px-4 profile-top-part'>
                <h4 className='fw-bold side-header'>Add Shipping Address</h4>
            </div>
            <hr />
            <form onSubmit={handleSubmit(handleSubmitAddress)}>
                <div className='addShippingAddress'>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Full Name</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text'  {...register("name", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Company</small></label><label><small style={{ fontSize: '11px' }}></small></label></div>
                        <input type='text' name=''  {...register("companyName", { required: false })} />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Address Line 1</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text' name=''  {...register("address1", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Address Line 2</small></label><label><small style={{ fontSize: '11px' }}></small></label></div>
                        <input type='text' name=''  {...register("address2", { required: false })} />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>City</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text' name=''  {...register("city", { required: true })}  />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Postcode</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input name='' type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 6)}  {...register("postCode", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Region / State
                        </small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <select /* value={district} onChange={e => setDistrict(e.target.value)}  */  {...register("state", { required: true })} required>
                            <option value='default' hidden disabled>Select</option>
                            <option>Barishal</option>
                            <option>Chittagong</option>
                            <option>Dhaka</option>
                            <option>Khulna</option>
                            <option>Mymensingh</option>
                            <option>Rangpur</option>
                            <option>Rajshahi</option>
                            <option>Sylhet</option>
                        </select>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Phone Number</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='number' name='' onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                            {...register("phoneNumber", { required: true })} />
                    </div>
                </div>
                <div className='addShippingAddress-button'>
                    <button type='Submit' className='addShippingAddress-button-save'>Save Address</button>
                    <button onClick={navigateToAddress} className='addShippingAddress-button-cancel'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddShippingAddress;