import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Profile.css';
import profile from '../../../Assets/img/profile/profile.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [user] = useAuthState(auth);
    const imageStorageKey = process.env.REACT_APP_imgbb_key;

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });
    const handleInputChange = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    };

    const handleUserProfileSubmit = async (data, event) => {
        event.preventDefault();
        const profileImg = data.profileImg[0];
        const formData = new FormData();
        formData.append('profileImg', profileImg);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // const img = imgData.data.url;
                    const updateUserProfileInfo = {
                        img: imgData.data.url,
                        name: data.name
                    }
                    fetch('http://localhost:5000/user', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateUserProfileInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {

                            }
                            else {
                            }
                        })
                }
            })
    }


    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 px-4 profile-top-part'>
                <h4 className='fw-bold side-header'>My Profile</h4>
                <button className='profile-edit-btn'>
                    <FontAwesomeIcon icon={faEdit} />
                    <span>&nbsp;Edit</span>
                </button>
            </div>
            <hr />
            <form onSubmit={handleUserProfileSubmit} >
                <div className="my-profile px-4 py-2">
                    <div className='my-profile-img'>
                        {userInfo.filepreview !== null ? <img width='170px' height='170px' src={userInfo.filepreview} alt='' /> : <img width='170px' height='170px' src={profile} alt='' />}

                        <input className='custom-file-input' type="file" name='profileImg' required onChange={handleInputChange} />
                        <input type='Submit' value='Add Product' />
                    </div>

                    <div className='ps-5 pt-3'>
                        <p className='p-0 m-0'><small>Full Name</small></p>
                        <h5 className='pt-1 '>{user?.displayName}</h5>
                        <input type='text' placeholder='name' name='name' />

                        <p className='p-0 m-0 pt-1'><small>Email Address</small></p>
                        <h6 className='pt-1'>{user?.email}</h6>

                        <p className='p-0 m-0 pt-1'><small>Phone Number </small></p>
                        <h5 className='pt-1'>{/* {user?.phoneNumber} */} 01737906772</h5>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default Profile;