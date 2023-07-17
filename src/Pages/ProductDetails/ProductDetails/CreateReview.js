import React, { useState } from 'react';
import './CreateReview.css';

const CreateReview = ({productDetails}) => {
    const [review, setReview] = useState();
    const {image1, } = productDetails;

    return (
        <div class="modal fade" id="writeAReview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class=" modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Write a Review</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body review-main">
                    <div className='review-dev1'>
                        <img src={image1} alt='' className='img-fluid' />
                    </div>
                    <div className='review-dev2'>
                        <div className='d-flex justify-content-between pb-1'>
                            <label><small>Rating</small></label> <label><small>Requird</small></label>
                        </div>
                        <select aria-label="Default select example" value={review} onChange={e => setReview(e.target.value)} >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className='d-flex justify-content-between pb-1'>
                            <label><small>Name</small></label> <label><small>Requird</small></label>
                        </div>
                        <input />
                        <div className='d-flex justify-content-between pb-1'>
                            <label><small>Email</small></label> <label><small>Requird</small></label>
                        </div>
                        <input />
                        <div className='d-flex justify-content-between pb-1'>
                            <label><small>Review Subject</small></label> <label><small>Requird</small></label>
                        </div>
                        <input />
                        <div className='d-flex justify-content-between pb-1'>
                            <label><small>Comments</small></label> <label><small>Requird</small></label>
                        </div>
                        <textarea />
                        <div>
                            <button className='submit-review-btn'>Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default CreateReview;