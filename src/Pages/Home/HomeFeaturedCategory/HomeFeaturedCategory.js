import React, { Component } from "react";
import Slider from "react-slick";
import './HomeFeaturedCategory.css';

export default class HomeFeaturedCategory extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="mt-4">
                <h5 className="homefeaturedCategore-title">FEATURED CATEGORIES</h5>
                <hr style={{ marginTop: '10px' }}></hr>
                <Slider {...settings}>
                    <div className="">
                        <div className="homefeaturedCategore-name">
                            <img width='202px' height='220px' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                                <h4 className="text-center pt-1"> Computer</h4>
                        </div>
                    </div>
                    <div className="">
                        <div className="homefeaturedCategore-name">
                            <img width='202px' height='220px' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                                <h4 className="text-center pt-1"> Computer</h4>
                        </div>
                    </div>
                    <div className="">
                        <div className="homefeaturedCategore-name">
                            <img width='202px' height='220px' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                                <h4 className="text-center pt-1"> Computer</h4>
                        </div>
                    </div>
                    <div className="">
                        <div className="homefeaturedCategore-name">
                            <img width='202px' height='220px' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                                <h4 className="text-center pt-1"> Computer</h4>
                        </div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}





















































/* import React from 'react';
import './HomeFeaturedCategory.css';

const HomeFeaturedCategory = () => {
    return (
        <div>
           sdf 
        </div>
    );
};

export default HomeFeaturedCategory; */