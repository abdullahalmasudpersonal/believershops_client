import React from 'react';
import './Banner.css';
import banner from '../../../img/banner/banner.jpg';
import banner2 from '../../../img/banner/banner (2).jpg';
import banner3 from '../../../img/banner/banner (3).jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel fade>
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
            </Carousel>
        </>
    );
}
export default Banner;