import React from "react";
import { Link } from "react-router-dom";
import { developerText } from "./../../data/developer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Developer = () => {
  return (
    <section id="developer">
      <h2>😪 추천 개발 유튜버를 소개합니다.</h2>
      <div className="develpoer__inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {developerText.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="develpoer" key={key}>
                <div className="develpoer__img play__icon">
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="develpoer__info">
                  <Link to={`/channel/${developer.channelId}`}>
                    {developer.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
