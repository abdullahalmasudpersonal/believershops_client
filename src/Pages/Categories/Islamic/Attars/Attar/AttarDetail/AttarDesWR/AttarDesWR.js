import React from 'react';
import './AttarDesWR.css';

const AttarDesWR = ({productDetails}) => {
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
                    <p>{productDetails.description}</p>
                </div>

                <div className="tab-pane" id="2">
                    <h5>0 Reviews</h5>
                </div>

                <div className="tab-pane" id="3">
                    <h3>add clearfix to tab-content (see the css)</h3>
                </div>

            </div>
        </div>
    );
};

export default AttarDesWR;
