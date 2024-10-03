import React, { useEffect, useState } from 'react';
import './AllUsers.css';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faL } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const UserRow = ({ user, index, refetch }) => {
    const { _id, email, role } = user;
    const [isOnLine, setOnline] = useState(false);
    const navigate = useNavigate();

    const navigateToDetailUser = () => {
        navigate(`/admin/allUser/user_details/${_id}`)
    }


    useEffect(() => {
        function handleOnlineStatus() {
            setOnline(true);
        }
        function handleOfflineStatus() {
            setOnline(false);
        }
        window.addEventListener("online", handleOnlineStatus);
        window.addEventListener("offline", handleOfflineStatus);

        return () => {
            window.addEventListener("online", handleOnlineStatus);
            window.addEventListener("offline", handleOfflineStatus);
        };

    }, []);


    const makeAdmin = () => {
        const proceed = window.confirm(`Are You Sure Create Admin ${email}`);
        if (proceed) {
            fetch(`https://mahsez-server.vercel.app/api/v1/admins/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 403) {
                        toast.error('Field to create an admin');
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.result.modifiedCount > 0) {
                        refetch();
                        toast.success('Successfully create an admin');
                    }
                });
        }
    };

    return (
        <>
            <tr>
                <th scope="row" className='align-middle'>{index + 1}</th>

                <td className='align-middle'><span className='allUserEmail' onClick={() => navigateToDetailUser(_id)}>{email}</span></td>

                <td className='align-middle'> {role !== 'admin' && <button onClick={makeAdmin} className='create-admin-btn px-2 py-1'>Create Admin</button>}</td>

                <td className='align-middle'>{role === 'admin' && <p className=' text-success fw-bold'></p>}7:48 PM<br />Friday, April 14, 2023 </td>

                {/* <td className='align-middle m-auto'>
                    <span className='fw-bold text-success'>Online</span>
                </td> */}
                {
                    isOnLine === true ?

                        (<td className='align-middle'><span className='fw-bold text-success'>Online</span></td>)

                        :

                        (<td className='align-middle'><span className='fw-bold text-danger'>Offline</span> </td>)
                }

                <td className='text-end align-middle'><button /* onClick={() => handleUserDelete(order._id)} */ className=' delete-user-btn px-2 py-1'>Delete</button></td>
            </tr>
        </>
    );
};

export default UserRow;
