import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Address.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle='Address |' />
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>Address</h4>
            </div>
            <hr />
            <div className='px-4 py-2 create-addres'>
                <div>
                    <button className='create-address-button'>
                        <FontAwesomeIcon className='add-address-icon' icon={faPlus} />
                        <p>New Address</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Address;