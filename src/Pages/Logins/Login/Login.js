import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'
import UseToken from '../../../Hooks/UseToken/UseToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const [passVisible, setPassVisible] = useState(false);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = UseToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwrodRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    let errorElement;
    if (error) {
        errorElement =
            <p className='text-danger m-0 text-center'> Error: {error.message}</p>
    }

    return (
        <div className='container-xxl my-5 '>
            <div className='register'>
                <div className='register-dev'>
                    <h4 className='text-center pt-4' style={{ fontFamily: 'Algerian' }}>Login</h4>
                    <div className='register-form-dev'>
                        <form onSubmit={handleLogin}>
                            <div>
                                <input type='email' placeholder='Email' ref={emailRef} required />
                            </div>

                            <div >
                                <input type={passVisible ? 'text':'password'} placeholder='Password' ref={passwrodRef} required/>
                                <FontAwesomeIcon icon={passVisible ? faEye: faEyeSlash} onClick={() => setPassVisible(!passVisible)} className='login-pass-show' />
                            </div>
                            <div className='pb-2'> <small className='pass-reset-btn'>Reset Password</small></div>
                            <div>
                                <input className='reg-submit-input' type='submit' value='Login' required />
                            </div>
                        </form>
                    </div>
                    {errorElement}
                    <p className='text-center'><small>Alrady have an account?
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <span style={{ color: 'purple' }}> Register</span>
                        </Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;