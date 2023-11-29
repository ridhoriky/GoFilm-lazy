import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import GlobalAPI from '../sevices/GlobalAPI';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    GlobalAPI.getMovieList().then((result) => {
      setMovieList(result);
    });
  }, []);

  return (
    <div className="flex justify-center items-center group/item">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
        modules={[Autoplay, Navigation]}
        className="mySwiper ">
        {movieList.map(
          (movie, index) =>
            index < 6 && (
              <SwiperSlide key={index}>
                <Slider movie={movie} type={movie.media_type} />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <div className="absolute w-full flex justify-between items-center z-20 group/edit invisible group-hover/item:visible">
        <button className="arrow-left arrow rounded-md opacity-0 group-hover/item:opacity-100 ease-in-out duration-500 bg-[#15191e] p-3  hover:text-[#15191e]  hover:bg-white">
          <FaArrowLeft size={28} />
        </button>
        <button className="arrow-right arrow rounded-md  opacity-0 group-hover/item:opacity-100 ease-in-out duration-500 bg-[#15191e] p-3  hover:text-[#15191e]  hover:bg-white">
          <FaArrowRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
