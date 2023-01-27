import React from 'react';
import './Banner.css';
import banner from '../../../img/banner/banner.jpg';
import banner2 from '../../../img/banner/banner (2).jpg';
import banner3 from '../../../img/banner/banner (3).jpg';
import banner21 from '../../../img/banner/banner2/banner (2).jpg';
import banner23 from '../../../img/banner/banner2/banner (3).jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <>

      <div className='banner'>
        <div className='banner-slide'>
          {/* <div style={{height:'400px'}}>
            <img
              className="d-block w-100 h-100"
              src={banner2}
              alt="Second slide"
            />
          </div> */}

           <Carousel fade >
              <Carousel.Item style={{height:'400px'}}>
                <img style={{height:'400px', width:'100%'}}
                  className="d-block h-100 d-inline-block"
                  src={banner}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  style={{height:'400px'}}>
                <img style={{height:'400px', width:'100%'}}
                  className="d-block h-100 d-inline-block"
                  src={banner2}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  style={{height:'400px'}}>
                <img style={{height:'400px', width:'100%'}}
                  className="d-block h-100 d-inline-block"
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
            </Carousel>  
        </div>
        <div className='banner-right'>
          <img
            className="d-block w-100 h-50"
            src={banner3}
            alt="Third slide"
          />
          <img
            className="d-block w-100 h-50"
            src={banner3}
            alt="Third slide"
          />
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