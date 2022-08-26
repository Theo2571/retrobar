import frame2 from "../../../assets/icons/barslider/frame2.png"
import bg1 from "../../../assets/icons/barslider/bg1.png"
import bg2 from "../../../assets/icons/barslider/bg2.png"
import clock from "../../../assets/icons/barslider/clock.svg"
import geotag from "../../../assets/icons/barslider/geotag.svg"
import phone from "../../../assets/icons/barslider/phone.svg"

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './BarSlider.module.scss';
import frame from "../../../assets/icons/slider/frame.png";
import React from "react";
import './BarSlider.css'


import {EffectCoverflow, Pagination} from "swiper";


const BarSlider = () => {
    return (
        <div className={styles.swiper_parent}>
            <Swiper
                loop={true}
                initialSlide={2}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <div className={styles.slider}>
                        <div className={styles.slider__frame}>
                            <img src={frame2} alt="" className={styles.card__frame_ramka}/>
                        </div>
                        <div className={styles.slider__about}>
                            <div className={styles.slider__about__bgi}>
                                <img src={bg1} alt=""/>
                                <h6 className={styles.slider__about__title}>MINIBAR</h6>
                                <div className={styles.slider__about__time}>
                                    <img src={clock} alt=""/>
                                    <p>18:00-06:00</p>
                                </div>
                                <div className={styles.slider__about__phone}>
                                    <img src={phone} alt=""/>
                                    <a href="#">0 558 55 00 00</a>
                                </div>
                                <div className={styles.slider__about__geotag}>
                                    <img src={geotag} alt=""/>
                                    <p>Чынгыза Айтматова, 56</p>
                                </div>
                            </div>
                            <div className={styles.slider__about__img}>
                                <img src={bg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slider}>
                        <div className={styles.slider__frame}>
                            <img src={frame2} alt="" className={styles.card__frame_ramka}/>
                        </div>
                        <div className={styles.slider__about}>
                            <div className={styles.slider__about__bgi}>
                                <img src={bg1} alt=""/>
                                <h6 className={styles.slider__about__title}>MINIBAR</h6>
                                <div className={styles.slider__about__time}>
                                    <img src={clock} alt=""/>
                                    <p>18:00-06:00</p>
                                </div>
                                <div className={styles.slider__about__phone}>
                                    <img src={phone} alt=""/>
                                    <a href="#">0 558 55 00 00</a>
                                </div>
                                <div className={styles.slider__about__geotag}>
                                    <img src={geotag} alt=""/>
                                    <p>Чынгыза Айтматова, 56</p>
                                </div>
                            </div>
                            <div className={styles.slider__about__img}>
                                <img src={bg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slider}>
                        <div className={styles.slider__frame}>
                            <img src={frame2} alt="" className={styles.card__frame_ramka}/>
                        </div>
                        <div className={styles.slider__about}>
                            <div className={styles.slider__about__bgi}>
                                <img src={bg1} alt=""/>
                                <h6 className={styles.slider__about__title}>MINIBAR</h6>
                                <div className={styles.slider__about__time}>
                                    <img src={clock} alt=""/>
                                    <p>18:00-06:00</p>
                                </div>
                                <div className={styles.slider__about__phone}>
                                    <img src={phone} alt=""/>
                                    <a href="#">0 558 55 00 00</a>
                                </div>
                                <div className={styles.slider__about__geotag}>
                                    <img src={geotag} alt=""/>
                                    <p>Чынгыза Айтматова, 56</p>
                                </div>
                            </div>
                            <div className={styles.slider__about__img}>
                                <img src={bg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BarSlider;