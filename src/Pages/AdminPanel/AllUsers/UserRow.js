import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully create an admin');
                }
            })
    }


    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{email}</td>
                <td> {role !== 'admin' && <button onClick={makeAdmin} className='order-payment-btn'>Create Admin</button>}</td>
                <td>{role === 'admin' && <p className='text-success fw-bold'>Admin</p>}</td>
                <td><button /* onClick={() => handleUserDelete(order._id)} */  className=' order-calcel-btn'>Delete</button></td>
            </tr>
        </>
    );
};

export default UserRow;

/* 


<tr >
            <th  scope="row">{index + 1}</th>

            <td>{email}</td>

            <td> {role !== 'admin' && <button onClick={makeAdmin} className='order-payment-btn'>Create Admin</button>}</td>

            <td>{role === 'admin' && <p className='text-success fw-bold'>Admin</p>}</td>

            <td><button onClick={() => handleUserDelete(order._id)}  className=' order-calcel-btn'>Delete</button></td>
</tr >


*/