import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Total.css';

const Navber = () => {
  return (
    <div>
      <div className='navber d-flex'>
        <h3>
          <Link to='/'>Navber</Link>
        </h3>
        <ul>
          <li>
            <Link to='/munira'>Munira</Link>

            <div className='muniras'>
              <li>
                <Link to='/munira-safwan'>Safwan</Link>
              </li>
            </div>
          </li>
        </ul>
      </div >
    </div>
  );
};

export default Navber;

/* 

<li>
            <a href='/masud'>Masud</a>
          </li>
          <li>
            <a href='/mahmud'>Mahmud</a>
          </li>
          <li>Mansura</li>
          <li>Marean</li>
*/