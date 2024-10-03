import React, { useEffect, useState } from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import './Address.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const Address = () => {
    const [user] = useAuthState(auth);
    //  const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();

    const navigateToAddshippingAddress = () => {
        navigate('/dashboard/address/add_shipping_address')
    };

    const { data: addresses, isLoading, refetch } = useQuery('addresses',
        () => fetch(`https://mahsez-server.vercel.app/api/v1/address?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    );
    if (isLoading) {
        return <Loading />
    };

    const navigateToOrderDetail = _id => {
        navigate(`/dashboard/address/${_id}`);
    };

    /* useEffect(() => {
        fetch(`https://mahsez-server.vercel.app/api/v1/address?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => {
                setAddresses(data);
            });
    }, [user]); */

    const deleteAddress = _id => {
        const proceed = window.confirm('Are you sure you want to delete this address?');
        if (proceed) {
            fetch(`https://mahsez-server.vercel.app/api/v1/address/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Successfully delete your address !!! `)
                        refetch();
                    }
                })
        }
    };

    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle='Address |' />
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>Address</h4>
            </div>
            <hr />
            <div className='py-3 myAddress'>
                {
                    addresses.map((address) =>
                        <div className='myAddress-dev'>
                            <h6>{address.coustomerName}</h6>
                            {
                                address.companyName ?
                                    <p>Company: {address.companyName}</p>
                                    : ''
                            }
                            <p>{address.address1},&nbsp;{address.address2}</p>
                            <p>{address.city} -&nbsp;{address.postCode}</p>
                            <p>{address.state}</p>
                            <h6 className='mt-2'>Phone: {address.phoneNumber}</h6>
                            <div className='d-flex gap-3 mt-4 '>
                                <button onClick={() => navigateToOrderDetail(address._id)} className='address-edit-btn'>Edit</button>
                                <button onClick={() => deleteAddress(address._id)} className='address-delete-btn'>Delete</button>
                            </div>
                        </div>
                    )
                }
                <div>
                    <button className='create-address-button' onClick={navigateToAddshippingAddress}>
                        <FontAwesomeIcon className='add-address-icon' icon={faPlus} />
                        <p>New Address</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Address;