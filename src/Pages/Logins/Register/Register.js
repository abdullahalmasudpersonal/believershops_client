import React from 'react';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        //  const phone = event.target.phone.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log(user)
    }

    return (
        <div className='container-xxl my-5 '>
            <div className='register'>
                <div className='register-dev'>
                    <h4 className='text-center pt-4' style={{ fontFamily: 'Algerian' }}>New Account</h4>
                    <div className='register-form-dev'>
                        <form onSubmit={handleRegister}>
                            <div>
                                <input type='text' placeholder='Full Name' name='name' required />
                            </div>
                            <div>
                                <input type='email' placeholder='Email' name='email' required />
                            </div>

                            {/*   <input type='number' placeholder='Phone Number' name='phone' required />  */}

                            <div>
                                <input type='password' placeholder='Password' name='password' required />
                            </div>
                            <div>
                                <input className='reg-submit-input' type='submit' value='Create Account' required />
                            </div>
                        </form>
                    </div>
                    <p className='text-center'><small>Alrady have an account?
                        <Link to='/login' style={{textDecoration:'none'}}>
                            <span style={{ color: 'purple' }}> Login</span>
                        </Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;