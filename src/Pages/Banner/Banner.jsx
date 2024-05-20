
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banImg1 from '../../assets/home/01.jpg'
import banImg2 from '../../assets/home/02.jpg'
import banImg3 from '../../assets/home/03.png'
import banImg4 from '../../assets/home/04.jpg'
import banImg5 from '../../assets/home/05.png'
import banImg6 from '../../assets/home/06.png'

const Banner = () => {
    return (

        <Carousel>
            <div>
                <img src={banImg1} />
            </div>
            <div>
                <img src={banImg2} />
            </div>
            <div>
                <img src={banImg3} />
            </div>
            <div>
                <img src={banImg4} />
            </div>
            <div>
                <img src={banImg5} />
            </div>
            <div>
                <img src={banImg6} />
            </div>
        </Carousel>

    );
};

export default Banner;