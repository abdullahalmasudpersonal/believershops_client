import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAttarDetail from '../../../../../Hooks/UseAttars/UseAttarDetail';
import AttarDesWR from './AttarDesWR/AttarDesWR';
import './AttarDetail.css';
import ReactImageMagnify from 'react-image-magnify';


const AttarDetail = () => {
    const { attarId } = useParams()
    const [attar] = UseAttarDetail(attarId);
    const [count, setCount] = useState(1);
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    };
    const [img, setImg] = useState(true);
    




    return (
        <div className='attar-detail'>

            <div className='attar-detail-first-part'>

                <div className='attar-detail-first-part-dev1'>

                    {/*  <div>
                        <img className='attar-detail-first-part-dev1-big-img' src={attar.img} alt='' />
                    </div> */}

                    <div className='attar-detail-first-part-dev1-big-img'>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: attar.img
                            },
                            largeImage: {
                                src: attar.img,
                                width: 1000,
                                height: 1500
                            },
                            lensStyle: {

                            }
                        }} />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='attar-detail-first-part-dev1-p'>
                            <FontAwesomeIcon icon={faSearch} />
                            <span> Click to zoom in</span>
                        </p>
                    </div>

                    <div className='attar-detail-first-part-dev1-img'>
                        <img width='100px' src={attar.img} alt='' />
                        <img width='100px' src={attar.img} alt='' />
                        <img width='100px' src={attar.img} alt='' />
                    </div>

                </div>

                <div className='attar-detail-first-part-dev2'>
                    <h4 className='mb-3'>{attar.name}</h4>
                    <p className=' mb-1'>
                        <small>4.5 </small>
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <small> (27) </small>
                        <small>&nbsp; Write a review</small>
                    </p>
                    <p className=' product-dev-p pt-2'>
                        {
                            attar.offerPrice ?
                                <h4>
                                    <span style={{ fontSize: '14px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>
                                    <span>{attar.offerPrice}.00 &nbsp;</span>

                                    <span style={{ fontSize: '13px', fontFamily: "Optima", fontWeight: 'bold', color: 'gray', textDecoration: 'line-through 1px' }}>৳ {attar.ragularPrice}.00</span>
                                </h4>
                                :
                                <span><span style={{ fontSize: '15px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>{attar.ragularPrice}.00</span>
                        }
                    </p>

                    <div className='attar-detail-dev-table'>
                        <table class="table table-borderless attar-detail-table mb-2">
                            <tbody>
                                <tr>
                                    <td>Brand:</td>
                                    <td>{attar.brand}</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>{attar.weight1} ML</td>
                                </tr>
                                <tr>
                                    <td>Availability:</td>
                                    <td>{attar.availability} Pcs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-3'>
                        <p className='mb-2'>Quantity:</p>
                        <div className='attar-detail-quantity-counter'>
                            <dev className='attar-detail-quantity-counter-p'>
                                <p style={{ color: 'gray' }} className='m-0 fw-bold'>{count}</p>
                            </dev>
                            <div className='d-grid attar-detail-quantity-counter-dev'>
                                <button onClick={increment} className='p-0'>
                                    <i style={{ color: 'gray' }} class="fa fa-angle-up px-2 "></i>
                                </button>
                                <button onClick={decrement} classNamep='p-0'>
                                    <i style={{ color: 'gray' }} class="fa fa-angle-down px-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button className='add-to-cart mb-3'>Buy Now</button> &nbsp; &nbsp; &nbsp;
                        <button className='add-to-cart'>Add to Cart</button>
                        {/* <button>Add to Wishlist</button> */}
                    </div>
                </div>
            </div>
            <AttarDesWR />
        </div>
    );
};

export default AttarDetail;
