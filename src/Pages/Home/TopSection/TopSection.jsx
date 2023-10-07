import React from 'react';
import Marquee from "react-fast-marquee";
import './TopSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();
const TopSection = () => {
    return (
        <div className='md:!pb-24 pb-5 lg:py-16 md:rounded-b-[80px] -z-10 bg-cyan-900 lg:w-full'>
            <div className='hero'>
                <div className='hero-content px-2 sm:px-4 md:px-8 lg:px-16 flex-col md:flex-row-reverse'>
                    <div className='order-1 pb-5'>
                        <img src="/topGif.png" className='md:max-w-md' alt="Banner" />
                    </div>
                    <div className='ox-hidden text-center mb-5 md:mb-0 md:text-left -order-3 md:order-3'>
                        <h1 className='text-[36px] font-all pt-4 mb-2 sm:mb-5 md:mt-2 sm:text-6xl md:text-[80px] text-white font-bold' data-aos="zoom-in-up">
                            <span className='text-sky-300'>CodeVenture</span> Academy
                        </h1>
                        <p className='my-1 font-all sm:text-xl md:my-4 text-white lg:my-4 md:w-3/4 ' data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="800">
                            "Transform <span className='text-warning text-xl'>Dreams</span> into Code, Skills into <span className='text-success font-bold text-xl'>Success!</span>"
                        </p>
                        <div>
                            <div>
                                <Link to='/register' className='btn btn-info m-4 border border-white '>Register Now!!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl mx-auto px-2 md:px-8 lg:px-16s text-white'>
                <Marquee speed={30} gradient gradientWidth={50} gradientColor={[101, 221, 239]} className='rounded'>
                    <span className='text-xl'>
                        * "Unlock Your Potential with CodeVenture Academy!" :- Md Meharaz Hossain Shijan * *
                        "Where Curiosity Meets Code: Join the Adventure!" :- Mark Henry *
                    </span>
                </Marquee>
            </div>

        </div>
    );
};

export default TopSection;