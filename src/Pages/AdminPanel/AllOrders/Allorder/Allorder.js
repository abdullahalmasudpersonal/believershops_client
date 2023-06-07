import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Allorder.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Allorder = () => {
    const [user] = useAuthState(auth);
    const [allOrder, setAllOrder] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/allOrder?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => {
                setAllOrder(data);
            });

    }, []);

    const navigateToOrderDetail = _id => {
        navigate(`/admin/allOrder/${_id}`);
    }


    return (
        <div className='allorders mx-3'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>All Orders ({allOrder.length})</h4>
            </div>
            <hr />
            <div className='px-3 table-responsive' >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order_No</th>
                            <th scope="col">Coustomer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Time</th>
                            <th scope="col">Porduct Name</th>
                            <th scope="col">Total</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((allOrder, index) =>
                                <tr key={allOrder._id}>
                                    <th scope="row">{allOrder.orderNo}</th>
                                    <td>{allOrder.coustomerName}</td>
                                    <td>{allOrder.email}</td>
                                    <td>{allOrder.orderTime}{allOrder.orderDate}</td>
                                    <td>{allOrder.productsName}</td>
                                    <td>{allOrder.grandTotal}</td>
                                    <td className='text-end'>Cash</td>
                                    <td className='text-end'>
                                        <button type="button" class="btn btn-info" onClick={() => navigateToOrderDetail(allOrder._id)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorder;
/* {allOrders().map((allOrder, index) =>
                            <tr key={allOrder._id}>
                                <th scope="row">{allOrder.orderNo}</th>
                                <td>{allOrder.coustomerName}</td>
                                <td>{allOrder.email}</td>
                                <td>{allOrder.orderTime}{allOrder.orderDate}</td>
                                <td>{allOrder.productsName.toString()}</td>
                                <td>{allOrder.grandTotal}</td>
                                <td className='text-end'>Cash</td>
                                <td className='text-end'>
                                    <button type="button" class="btn btn-info" onClick={() => navigateToOrderDetail(allOrder._id)}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        )}
*/