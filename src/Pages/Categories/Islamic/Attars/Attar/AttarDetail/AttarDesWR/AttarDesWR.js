import React from 'react';
import './AttarDesWR.css';

const AttarDesWR = ({productDetails}) => {
    const {name,description} = productDetails;

    return (
        <div id="exTab2" className='attar-detail-desWR'>

            <ul className="attar-detail-desWR-head nav nav-tabs">
                <li className="active"  >
                    <a href="#description" data-toggle="tab">DESCRIPTION</a>
                </li>

                <li><a href="#reviews" data-toggle="tab">REVIEWS</a>
                </li>

                <li><a href="#solution" data-toggle="tab">Questions</a>
                </li>
            </ul>

            <div className="tab-content attar-detail-desWR-content">

                <div className="tab-pane active" id="description">
                    ----------------
                    <h6 className='m-0 p-0'>{name}</h6>
                    ----------------
                    <p>{description}</p>
                </div>

                <div className="tab-pane" id="reviews">
                    <h5>0 Reviews</h5>
                </div>

                <div className="tab-pane" id="solution">
                    <h3>add clearfix to tab-content (see the css)</h3>
                </div>

            </div>
        </div>
    );
};

export default AttarDesWR;
