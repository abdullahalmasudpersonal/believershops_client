import React from 'react';
import './Footer.css';
import img from '../../../Assets/img/logo/mahsez (2).png';
import bkash from '../../../Assets/img/payment/bkash.png';
import nagod from '../../../Assets/img/payment/nagod.png';
import rocket from '../../../Assets/img/payment/rocket.png';
import sureCash from '../../../Assets/img/payment/sureCash.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer2-bg '>
            <footer class="text-center text-lg-start container-xxl">
                <section class="d-flex justify-content-center justify-content-lg-between py-4 border-bottom">
                    <div class=" d-none d-lg-block d-flex align-items-center">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className='footer-socila-media'>
                        <a href="https://www.facebook.com/profile.php?id=100090494528018" target='noopener' class="me-4 text-reset" style={{ padding: '6px 13px', backgroundColor:'	#4267B2' }}>
                            <i class="fab fa-facebook-f" ></i>
                        </a>
                        <a href="youtube.com" target='noopener' class="me-4 text-reset" style={{ padding: '6px 9px', backgroundColor:'	#FF0000'  }}>
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://twitter.com/m_mahsez" target='noopener' class="me-4 text-reset" style={{ padding: '6px 10px', backgroundColor:'#1DA1F2'  }}>
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="googleplus.com" target='noopener' class="me-4 text-reset" style={{ padding: '6px 8px', backgroundColor:'	#db4a39 '  }}>
                            <i class="fa-brands fa-google-plus-g"></i>
                        </a>
                        <a href="instagram.com" target='noopener' class="me-4 text-reset instagram-footer-bd-color" style={{ padding: '6px 11px', backgroundColor:'	#feda75 '  }}>
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="linkedIn.com" class="me-4 text-reset" target='noopener' style={{ padding: '6px 11px', backgroundColor:'	#0072b1 '  }}>
                            <i class="fab fa-linkedin"></i>
                        </a>
                        {/* <a href="" class=" text-reset">
                            <i class="fab fa-github"></i>
                        </a> */}
                    </div>
                </section>
                <section class="">
                    <div class=" text-center text-md-start mt-5">
                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 ms-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <img width='140px' src={img} alt='' />
                                </h6>
                                <p>Here islamic clothing, beauty, perfume, halal food, bags, computers, electronics, sports and other sunnat products.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a class="text-reset">Apple</a>
                                </p>
                                <p>
                                    <a class="text-reset">Micorsofet</a>
                                </p>
                                <p>
                                    <a class="text-reset">Lenovo</a>
                                </p>
                                <p>
                                    <a class="text-reset">Laravel</a>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a class="text-reset">Pirvate Policy</a>
                                </p>
                                <p>
                                    <a class="text-reset">Terms & Conditions</a>
                                </p>
                                <p>
                                    <a class="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a class="text-reset">Help</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 me-0 mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i>South Jatrabari, Dhaka-1204</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    m.mahsez@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 880 1737906772</p>
                                <p><i class="fas fa-phone me-3"></i> + 880 1445678999</p>
                            </div>

                        </div>

                    </div>
                </section>
            </footer>

            <div class="text-center p-3 footer-bottem-part ">
                <div className='container-xxl footer-bottem-part-dev'>
                    <div className='d-flex align-items-center'>
                        <a>Copyright &#169; 2023 mahsez.com || All Rights Reserved</a>
                    </div>
                    <div className='footer-payment-cart'>
                        <img src={bkash} alt='' />
                        <img src={nagod} alt='' />
                        <img src={rocket} alt='' />
                        <img src={sureCash} alt='' />
                        <img src={bkash} alt='' />
                        <img src={nagod} alt='' />
                        <img src={rocket} alt='' />
                        <img src={sureCash} alt='' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;