import React from 'react';
import Swiper from 'swiper';



const CarouselVideos = () => {
    const swiper = new Swiper('.video-swiper',
        {
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            }
        });


    return (
        <div className="video-swiper">
            <button className="next-slide" onClick={() => swiper.slideNext()}>NEXT</button>
            <button className="prev-slide">PREV</button>
            <div className="swiper-slide">
                    Number one
            </div>
            <div className="swiper-slide">
                    Number one
            </div>
            <div className="swiper-slide">
                    Number one
            </div>
            <div className="swiper-slide" >
                    Number one
            </div>
        </div>
    );
};

export default CarouselVideos;