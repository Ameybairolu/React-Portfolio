import "./sectionWithSlider.css";

import { ReactElement } from "react";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface SectionWithSliderProps {
    data: Array<{ avatar: string; title: string; text: string }>;
}

const SectionWithSlider: React.FC<SectionWithSliderProps> = ({ data }): ReactElement<any, any> => {
    return (
        <Swiper
            className="container sectionWithSlider__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {data.map(({ avatar, title, text }, index) => {
                return (
                    <SwiperSlide key={index} className="sectionWithSlider">
                        <div className="slider__avatar">
                            <img src={avatar} alt={`Avatar ${title}`} />
                        </div>
                        <h5 className="slider__title">{title}</h5>
                        <small className="slider__text">{text}</small>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SectionWithSlider;
