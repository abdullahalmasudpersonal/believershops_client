import React from 'react';
import './AttarDesWR.css';

const AttarDesWR = () => {
    return (
        <div id="exTab2" className='attar-detail-desWR'>

            <ul className="attar-detail-desWR-head nav nav-tabs">
                <li className="active"  >
                    <a href="#1" data-toggle="tab">DESCRIPTION</a>
                </li>

                <li><a href="#2" data-toggle="tab">REVIEWS</a>
                </li>

                <li><a href="#3" data-toggle="tab">Solution</a>
                </li>
            </ul>

            <div className="tab-content attar-detail-desWR-content">

                <div className="tab-pane active" id="1">
                    <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
                </div>

                <div className="tab-pane" id="2">
                    <h3>Notice the gap between the content and tab after applying a background color</h3>
                </div>

                <div className="tab-pane" id="3">
                    <h3>add clearfix to tab-content (see the css)</h3>
                </div>

            </div>
        </div>
    );
};

export default AttarDesWR;
