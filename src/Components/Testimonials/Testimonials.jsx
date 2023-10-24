import React from 'react';
import './Testimonials.css'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    const reviews = [
        {
            name: "Marta Dominguez",
            country: "Spain",
            state: " Andalusia",
            imgSrc: "../../../Content/Homepage/Testimonials/person-1.jpg",
            text: "Being a jewelry enthusiast, I've seen and owned my fair share of pieces, but Vivienne's is in a league of its own. Every piece feels like it's crafted with passion, telling a story of its own."
        },
        {
            name: "Clara Montgomery",
            country: "USA",
            state: " Massachusetts",
            imgSrc: "../../../Content/Homepage/Testimonials/person-2.jpg",
            text: "I can't express how much I adore the designs at Vivienne's. The jewelry pieces are not only incredibly elegant, but each one feels special and unique."
        },
        {
            name: "Emilia Gustafsson",
            country: "Sweden",
            state: " Västra Götaland",
            imgSrc: "../../../Content/Homepage/Testimonials/person-3.jpg",
            text: "Every piece from Vivienne's exudes charm and elegance. The quality, the design, the finish, everything is just top-notch."
        },
        {
            name: "Fiona O'Sullivan",
            country: "Ireland",
            state: " Cork",
            imgSrc: "../../../Content/Homepage/Testimonials/person-4.jpg",
            text: "Right from the sheer quality of their pieces to the design aesthetics, everything screams luxury and taste."
        },
        {
            name: "Amélie Dubois",
            country: "France",
            state: " Provence",
            imgSrc: "../../../Content/Homepage/Testimonials/person-5.jpg",
            text: "Shopping for jewelry has always been a cherished pastime, and discovering Vivienne's was like striking gold. Their collection beautifully marries sophistication with modernity."
        },
        {
            name: "Lena Schmidt",
            country: "Germany",
            state: " Bavaria",
            imgSrc: "../../../Content/Homepage/Testimonials/person-6.jpg",
            text: "Their attention to detail, commitment to quality, and the beautiful narrative behind each piece make them my go-to jewelry destination."
        },
        {
            name: "Chiara Bianchi",
            country: "Italy",
            state: " Tuscany",
            imgSrc: "../../../Content/Homepage/Testimonials/person-7.jpg",
            text: "Vivienne's is the epitome of elegance in the world of jewelry. Their pieces have this uncanny ability to resonate with your personality."
        }
    ];

    return (
        <>
            <div className="testimonials">
                <div className="section-left">
                    <div className="section-left-heading">Our Customers Speak</div>
                    <div className="section-left-p1">At Vivienne's, we're not just crafting exquisite jewelry; we're weaving stories, memories, and emotions into every piece. But don't just take our word for it.</div>
                    {/* <div className='section-left-p2'>Dive into the heartfelt experiences of our cherished clientele who've made Vivienne's a part of their most treasured moments. Their stories inspire us daily, pushing us to elevate our artistry and serve you better with each passing day.</div> */}
                </div>
                <div className="section-right">
                    <Swiper 
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((content) => (
                            <SwiperSlide className='pagination-swiper'>
                                <img src={content.imgSrc} alt="" />
                                <div className="pagination-detail">
                                    <div className="review">{content.text}</div>
                                    <div className="persona-name">{content.name}</div>
                                    <div className="country">{content.country},{content.state}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Testimonials;