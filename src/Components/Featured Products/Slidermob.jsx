import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slidermob.css';
import images from '../../../Image_Imports/imageImports-collections';

function Slidermob() {
    const products = [
        { name: "Radiance Necklace", price: "$168.89", imgSrc: images.image171 },
        { name: "Lila Stud", price: "$230.45", imgSrc: images.image172 },
        { name: "Mira Charm", price: "$760.75", imgSrc: images.image173 },
        { name: "Zara Drop", price: "$410.65", imgSrc: images.image174 },
        { name: "Tia Pearl", price: "$590.90", imgSrc: images.image175 },
        { name: "Luna Band", price: "$830.50", imgSrc: images.image176 },
        { name: "Rhea Ring", price: "$550.20", imgSrc: images.image177 },
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

