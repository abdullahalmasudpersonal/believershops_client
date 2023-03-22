import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Profile.css';
import profile from '../../../Assets/img/profile/profile.png';

const Profile = () => {
    const [user] = useAuthState(auth);
    const photoURL = user.photoURL;


    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>My Profile</h4>
            </div>
            <hr />
            <div class="d-flex px-4 py-2">
                <div className=''>
                   <img width='220px' src= {profile} alt='' />  
                </div>
                <div className='ps-5 pt-3'>
                    <p className='p-0 m-0'><small>Full Name</small></p>
                    <h5 className='pt-1 '>{user?.displayName}</h5>

                    <p className='p-0 m-0 pt-1'><small>Email Address</small></p>
                    <h5 className='pt-1'>{user?.email}</h5>

                    <p className='p-0 m-0 pt-1'><small>Phone Number </small></p>
                    <h5 className='pt-1'>{/* {user?.phoneNumber} */} 01737906772</h5>

               </div>
            </div>
        </div>
    );
};

export default Profile;