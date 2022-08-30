import React from 'react';
import Player from "../video-player/Player";
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation} from "swiper";
import './CarouselVideos.scss'
import {ReportVideo} from "../../../types/types";



const CarouselVideos = ({videoReports}: { videoReports: ReportVideo[] }) => {

    return (
        <>
        {videoReports.map(report => (
            <div>
                <h3 className="title">{report.date}</h3>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    className="videosSwiper"
                    slidesPerView="auto"
                    centeredSlides={true}
                >
                    {report.urlVideo.map(video =>(
                        <SwiperSlide>
                            <Player urlVideo={video}></Player>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            ))
        }
        </>
    );
};

export default CarouselVideos;