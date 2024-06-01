import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from '../../../public/images/banner1.jpg';
import banner2 from '../../../public/images/banner2.jpg';
import banner3 from '../../../public/images/banner3.jpg';
import banner4 from '../../../public/images/banner4.jpg';

const BannerSlider = () => {
   return (
      <div>
         <Swiper
            className='h-[300px] w-[400px] md:h-[350px] md:w-[630px] lg:h-[600px] lg:w-[1000px] mySwiper rounded-3xl'
            navigation={true}
            loop={true}
            modules={[Navigation]}
            style={{
               '--swiper-navigation-color': '#193abf',
               '--swiper-pagination-color': '#193abf',
               'font-weight': 'bold'
            }}>
            <SwiperSlide>
               <div className='slide'>
                  <img className='' src={banner1} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='slide'>
                  <img className='' src={banner2} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='slide'>
                  <img className='' src={banner3} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='slide'>
                  <img className='' src={banner4} alt="" />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default BannerSlider;