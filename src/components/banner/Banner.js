// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../banner/banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {

    const style = {
        H1: 'text-[#fff] font-medium text-[25px] mt-[30px] ml-[-100px] tracking-tight',
        H1_2: 'text-[#fff] font-medium text-[25px] mt-[30px] ml-[-580px] tracking-tight',
        H1_3: 'text-[#fff] font-medium text-[30px] mt-[30px] ml-[-460px] tracking-tight',
        H1_4: 'text-[#fff] font-medium text-[25px] mt-[30px] ml-[-100px] tracking-tight',
        H1_5: 'text-[#fff] font-medium text-[30px] mt-[30px] ml-[-425px] tracking-tight',
        H1_6: 'text-[#fff] font-medium text-[30px] mt-[30px] tracking-tight',
        H1_7: 'text-[#fff] font-medium text-[30px] mt-[30px] ml-[-830px] tracking-tight',
        Button: 'w-[400px] h-[60px] bg-[#ccc] rounded-[5px] mt-[20px] ml-[-700px]'

    }

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="img1">
                        <h1 className={style.H1}>BMW GROUP REMAINS ON TRACK FOR SUCCESS AS TRANSFOMATION CONTINUES.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img2">
                        <h1 className={style.H1_2}>THIS IS HOW GREEN THE BMW iFACTORY IS.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img3">
                        <h1 className={style.H1_3}>THIS IS HOW DIGITAL THW BMW iFACTORY IS.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img4">
                        <h1 className={style.H1_4}>BMW GROUP REMAINS ON TRACK FOR SUCCESS AS TRANSFOMATION CONTINUES.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img5">
                        <h1 className={style.H1_5}>BMW GROUP PRODUCES FUEL CELL SYSTEMS.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img6">
                        <h1 className={style.H1_6}>THE BMW GROUP SUSTAINABILTY STRATEGY RESTS ON THESE SIX PILLARS.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img7">
                        <h1 className={style.H1_7}>EXPERIENCE BMW.</h1>
                        <button className={style.Button}>LEARN MORE</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
