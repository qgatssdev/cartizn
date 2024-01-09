import Carousel from '../../../components/carousel';
import Footer from '../../footer';
import {
  imageContainerFive,
  imageContainerFour,
  imageContainerOne,
  imageContainerThree,
  imageContainerTwo,
} from './images';
import './styles.scss';

const Creative = () => {
  return (
    <div className='creative_container'>
      <div className='creative_col1'>
        <div className='heading'>
          <h1>
            CREATIVE SHOOT <span>✨</span>
          </h1>
          <p>
            "Capture the beauty, ignite the imagination. In the realm of
            creativity, every frame tells a story waiting to unfold."
          </p>
        </div>
        <div className='image_col'>
          <Carousel images={imageContainerOne} timeInterval={10000} />
        </div>
        <div className='image_col'>
          <Carousel images={imageContainerTwo} timeInterval={27000} />
        </div>
      </div>
      <div className='creative_col2'>
        <div className='image_col2'>
          <Carousel images={imageContainerThree} timeInterval={28000} />
        </div>
        <div className='image_col2'>
          <Carousel images={imageContainerFour} timeInterval={17000} />
        </div>
        <div className='image_col4'></div>
        <div className='image_col3'>
          <Carousel images={imageContainerFive} timeInterval={22000} />
        </div>
        <div className='image_col1'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Creative;
