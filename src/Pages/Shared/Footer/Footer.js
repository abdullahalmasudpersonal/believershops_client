import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer2-bg'>
        <footer class="text-center text-lg-start text-muted container">
            <section class="d-flex justify-content-center justify-content-lg-between py-4 border-bottom">
                <div class=" d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class=" text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class=" text-center text-md-start mt-5">
                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 ms-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Believer Shop
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
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
                                <a class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a class="text-reset">Help</a>
                            </p>
                        </div>



                        <div class="col-md-4 col-lg-3 col-xl-3 me-0 mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3"></i> Gulshan-2, Dhaka 1204, BD</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                comaccwar2@gmail.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 880 1345678898</p>
                            <p><i class="fas fa-phone me-3"></i> + 880 1445678999</p>
                        </div>

                    </div>

                </div>
            </section>
        </footer>
        <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'gray' }}>
            © 2022
            <a class="text-reset fw-bold"> Believer Shop</a>
        </div>

    </div>
    );
};

export default Footer;