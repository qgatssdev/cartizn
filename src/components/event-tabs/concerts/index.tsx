import Carousel from '../../../components/carousel';
import Footer from '../../footer';
import './styles.scss';
import {
  imageContainerFive,
  imageContainerFour,
  imageContainerOne,
  imageContainerThree,
  imageContainerTwo,
} from './images';

const Concerts = () => {
  return (
    <div className='concert_container'>
      <div className='concert_col1'>
        <div className='image_col'>
          <Carousel images={imageContainerOne} timeInterval={28000} />
        </div>
        <div className='image_col'>
          <Carousel images={imageContainerTwo} timeInterval={22000} />
        </div>
        <div className='heading'>
          <h1>
            CONCERTS & EVENTS <span>🔥</span>
          </h1>
          <p>
            "Through the lens, I capture the rhythm, the energy, and the raw
            passion of the stage. Each click of the shutter immortalizes the
            magic of music, preserving the euphoria and the unforgettable
            moments that ignite the soul."
          </p>
        </div>
      </div>
      <div className='concert_col2'>
        <div className='image_col1'></div>
        <div className='image_col2'>
          <Carousel images={imageContainerThree} timeInterval={10000} />
        </div>
        <div className='image_col2'></div>
        <div className='image_col2'>
          <Carousel images={imageContainerFour} timeInterval={17000} />
        </div>
        <div className='image_col2'>
          <Carousel images={imageContainerFive} timeInterval={27000} />
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Concerts;
