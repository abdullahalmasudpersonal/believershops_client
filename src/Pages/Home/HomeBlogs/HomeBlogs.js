import React from 'react';
import Slider from "react-slick";
import UseBlgos from '../../../Hooks/UseBlogs/UseBlogs';
import Blog from '../../Blogs/Blog/Blog';

const HomeBlogs = () => {
    const [blogs, setBlogs] = UseBlgos([]);

    var settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h5 className="homefeaturedCategore-title">FROM OUR BLOG</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <Slider {...settings}>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            
            </Slider>
        </div>
    );
};

export default HomeBlogs;