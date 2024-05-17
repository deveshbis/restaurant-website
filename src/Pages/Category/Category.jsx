import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


import CategoryImg1 from "../../assets/home/slide1.jpg";
import CategoryImg2 from "../../assets/home/slide2.jpg";
import CategoryImg3 from "../../assets/home/slide3.jpg";
import CategoryImg4 from "../../assets/home/slide4.jpg";
import CategoryImg5 from "../../assets/home/slide5.jpg";
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={CategoryImg1} alt="" />
                    <h3 className='text-4xl text-white text-center uppercase -mt-10'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CategoryImg2} alt="" />
                    <h3 className='text-4xl text-center text-white uppercase -mt-10'>pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={CategoryImg3} alt="" />
                    <h3 className='text-4xl text-center text-white uppercase -mt-10'>Soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={CategoryImg4} alt="" />
                    <h3 className='text-4xl text-center text-white uppercase -mt-10'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CategoryImg5} alt="" />
                    <h3 className='text-4xl text-center text-white uppercase -mt-10'>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;