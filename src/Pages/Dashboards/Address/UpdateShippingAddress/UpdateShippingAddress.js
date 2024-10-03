import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import UseAddressDetail from '../../../../Hooks/UseAddressDetail/UseAddressDetail';
import { toast } from 'react-toastify';

const UpdateShippingAddress = () => {
    const [user] = useAuthState(auth);
    const { addressId } = useParams();
    const [addressDetails, setAddressDetaisl] = UseAddressDetail(addressId);

    const { _id,coustomerName, companyName, address1, address2, city, postCode, state, phoneNumber } = addressDetails;

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const navigateToAddress = () => {
        navigate(`/dashboard/address`)
    };
    const handleSubmitAddress = async data => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const updateAddress = {
                email: user.email,
                coustomerName: data.name,
                companyName: data.companyName,
                address1: data.address1,
                address2: data.address2,
                city: data.city,
                postCode: data.postCode,
                state: data.state,
                phoneNumber: data.phoneNumber
            }
            fetch(`https://mahsez-server.vercel.app/api/v1/address/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(updateAddress)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success(`Successfully Updated Address`);
                        reset();
                        navigateToAddress();
                    }
                    else {
                        toast.error(`Faield to update Address`);
                    }
                })
        }
    };

    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle="Update Shipping Address |" />
            <div className='pt-4 px-4 profile-top-part'>
                <h4 className='fw-bold side-header'>Update Shipping Address</h4>
            </div>
            <hr />
            <form onSubmit={handleSubmit(handleSubmitAddress)}>
                <div className='addShippingAddress'>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Full Name</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text' defaultValue={coustomerName} {...register("name", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Company</small></label><label><small style={{ fontSize: '11px' }}></small></label></div>
                        <input type='text' name='' defaultValue={companyName} {...register("companyName", { required: false })} />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Address Line 1</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text' name='' defaultValue={address1} {...register("address1", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Address Line 2</small></label><label><small style={{ fontSize: '11px' }}></small></label></div>
                        <input type='text' name='' defaultValue={address2} {...register("address2", { required: false })} />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>City</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input type='text' name='' defaultValue={city} {...register("city", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Postcode</small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <input name='' type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 6)} defaultValue={postCode} {...register("postCode", { required: true })} required />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'><label><small>Region / State
                        </small></label><label><small style={{ fontSize: '11px' }}>REQUIRED</small></label></div>
                        <select {...register("state", { required: true })} required>
                            <option value='' hidden>Select---</option>
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
                        <input type='number' name='' onInput={(e) => e.target.value = e.target.value.slice(0, 11)} defaultValue={phoneNumber}
                            {...register("phoneNumber", { required: true })} required />
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

export default UpdateShippingAddress;