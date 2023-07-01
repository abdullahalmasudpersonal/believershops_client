import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Allorder.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Allorder = () => {
    const [user] = useAuthState(auth);
    const [allOrder, setAllOrder] = useState([]);
    const navigate = useNavigate();
    const [orderSearch, setOrderSearch] = useState("");


    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/allOrder?email=${user.email}`, {
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
                setAllOrder(data);
            });

    }, []);

    const navigateToOrderDetail = _id => {
        navigate(`/admin/allOrder/${_id}`);
    };

    /* start search order */
    const search = (event) => {
        setOrderSearch(event.target.value);
    };
    let dataSearch = allOrder.filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(orderSearch.toString().toLowerCase()));
    });
    /* end search order */

    return (
        <div className='allorders' style={{ background: 'white' }}>
            <PageTitle pageTitle='AllOrder |' />
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold side-header'>All Orders ({allOrder.length})</h4>
                <input className='allorder-search-ber' placeholder='Search Order' value={orderSearch}
                    onChange={search.bind(this)} />
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
                            dataSearch.map((allOrder) =>
                                <tr key={allOrder._id}>
                                    <th scope="row">{allOrder.orderNo}</th>
                                    <td>{allOrder.coustomerName}</td>
                                    <td>{allOrder.email}</td>
                                    <td>{allOrder.orderTime}&nbsp;{allOrder.orderDate}</td>
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