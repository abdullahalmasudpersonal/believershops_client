import React from 'react';
import './Banner.css';
import banner from '../../../img/banner/banner.jpg';
import banner21 from '../../../img/banner/banner2/banner (2).jpg';
import banner23 from '../../../img/banner/banner2/banner (3).jpg';

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className='banner-slide'>
                    <img src={banner} />
                </div>
                <div className='banner-right-img'>
                    <img src={banner21} />
                    <img src={banner21} />
                </div>
            </div>

        </>
    );
};

export default Banner;

{/*  <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
        
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}