import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import AttarDesWR from './AttarDesWR/AttarDesWR';
import ReactImageZoom from 'react-image-zoom';
import './AttarDetail.css';
import UseProductDetails from '../../../../../Hooks/UseProductDetails/UseProductDetails';
import { toast } from 'react-toastify';
import { addToDb } from '../../../../../utilities/fakedb';
import UseCart from '../../../../Cart/UseCart';
import Slider from 'react-slick';


const AttarDetail = () => {
    const [cart, setCart] = UseCart();
    const { productId } = useParams();
    const [attar] = UseProductDetails(productId);
    const [count, setCount] = useState(1);
    const [imgSlide, setImgSlide] = useState();



    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            if (prevCount < 10) {
                return (prevCount += 1);
            }
            else {
                return (prevCount = 10);
            }
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

    const handleAddToCard = (selectedAttar) => {
        let newCart = [];
        const exists = cart.find(attar => attar._id === selectedAttar._id);
        if (!exists) {
            selectedAttar.quantity = count;
            newCart = [...cart, selectedAttar];
            toast.success(`Added To Cart ${count}`);
        }
        else {
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = exists.quantity + count;
            newCart = [...rest, exists];
            toast.success(`Added To Cart ${count}`);
        }
        setCart(newCart);
        addToDb(selectedAttar._id);
    }

    /*     let total = 0;
        let shipping = 0;
        let quantity = 0;
        for (const product of cart) {
            quantity = quantity + product.quantity;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
        }  */

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

   // console.log(value.count)

    return (
        <div className='attar-detail px-2'>
            <div className='attar-detail-first-part'>
                <div className='attar-detail-first-part-dev1'>
                    <div className='attar-detail-first-part-dev1-big-img-dev'>
                        <img className='attar-detail-first-part-dev1-big-img' src={attar.image1} alt='' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='attar-detail-first-part-dev1-p'>
                            <FontAwesomeIcon icon={faSearch} />
                            <span> Click to zoom in</span>
                        </p>
                    </div>

                    <div className='attar-detail-first-part-dev1-img'>
                        <img height='100px' name='imgSlide' width='100px' src={attar.image1} alt='' />
                        <img height='100px' width='100px' src={attar.image2} alt='' name='imgSlide' />
                        <img height='100px' width='100px' src={attar.image3} alt='' name='imgSlide' />
                    </div>
                </div>

                <div className='attar-detail-first-part-dev2'>
                    <h4 className='mb-2'>{attar.name}</h4>
                    <p className=' mb-0'>
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
                        <table className="table table-borderless attar-detail-table mb-2">
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
                                    <i style={{ color: 'gray' }} className="fa fa-angle-up px-2 "></i>
                                </button>
                                <button onClick={decrement} classnamep='p-0'>
                                    <i style={{ color: 'gray' }} className="fa fa-angle-down px-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*   onClick={()=>props.handleAddToCard(props.attar)} */}
                    <div className='mt-4'>
                        <Link to='/cart'><button className='add-to-cart mb-3'>Buy Now</button></Link> &nbsp; &nbsp; &nbsp;
                        <button className='add-to-cart' onClick={() => handleAddToCard(attar)}  >Add to Cart</button>
                        {/* <button>Add to Wishlist</button> */}
                    </div>
                </div>
            </div>
            <AttarDesWR />

            <Slider {...settings}>
                <div>
                    <img src={attar.image1} />
                </div>
                <div>
                    <img src={attar.image2} />
                </div>
                <div>
                    <img src={attar.image3} />
                </div>
            </Slider>

        </div>
    );
};


export default AttarDetail;


/* 
import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";

export default className CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsclassName: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}


*/