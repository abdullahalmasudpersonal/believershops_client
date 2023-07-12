import React, { useState } from 'react';
import './AllUsers.css';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AllUsers = () => {
    const [searchUser, setSearchUser] = useState('');

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/allUsers', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    };

    /* start search order */
    const search = (event) => {
        setSearchUser(event.target.value);
    };
    let userSearch = users.filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(searchUser.toString().toLowerCase()));
    });
    /* end search order */

    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle='All User |' />
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold side-header'>All Users ({users.length})</h4>
                <input className='allorder-search-ber' placeholder='Search Order' value={searchUser}
                    onChange={search.bind(this)} />
            </div>
            <hr />
            <div className='px-3 table-responsive-lg'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Email</th>
                            <th scope="col">Make Admin</th>
                            <th scope="col">Create Date</th>
                            <th scope="col">Status</th>
                            <th scope="col" className='text-end'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userSearch.map((user, index) => <UserRow key={user._id} user={user} index={index}
                                refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;