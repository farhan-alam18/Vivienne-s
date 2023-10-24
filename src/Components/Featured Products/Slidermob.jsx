import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slidermob.css'

function Slidermob() {
    const products = [
        { name: "Radiance Necklace", price: "$168.89", imgSrc: "../../../Content/Homepage/Image-171.png" },
        { name: "Lila Stud", price: "$230.45", imgSrc: "../../../Content/Homepage/Image-172.png" },
        { name: "Mira Charm", price: "$760.75", imgSrc: "../../../Content/Homepage/Image-173.png" },
        { name: "Zara Drop", price: "$410.65", imgSrc: "../../../Content/Homepage/Image-174.png" },
        { name: "Tia Pearl", price: "$590.90", imgSrc: "../../../Content/Homepage/Image-175.png" },
        { name: "Luna Band", price: "$830.50", imgSrc: "../../../Content/Homepage/Image-176.png" },
        { name: "Rhea Ring", price: "$550.20", imgSrc: "../../../Content/Homepage/Image-177.png" },
    ];

    return (
        <Swiper
            spaceBetween={180}
            slidesPerView={2}
            scrollbar={{ hide: true, el: '.swiper-scrollbar' }}
            style={{height: '400px' }}
        >
            {products.map((product, index) => (
                <SwiperSlide key={index} className='my_swiper_slider'>
                    <p className='price_mob'>{product.price}</p>
                    <p className='name_mob'>{product.name}</p>
                    <img src={product.imgSrc} alt={product.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slidermob;

