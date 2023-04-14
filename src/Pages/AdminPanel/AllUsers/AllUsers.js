import React from 'react';
import './AllUsers.css';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/allUsers', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='allUsers'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>All Users ({users.length})</h4>
            </div>
            <hr />
            <div className='px-3 table-responsive-lg'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Email</th>
                            <th scope="col">Make Admin</th>
                            <th scope="col">Create Date</th>
                            <th scope="col" className='text-end'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index}
                                refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;