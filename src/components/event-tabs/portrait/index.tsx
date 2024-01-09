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

const Portrait = () => {
  return (
    <div className='portrait_container'>
      <div className='portrait_col1'>
        <div className='image_col'>
          <Carousel images={imageContainerOne} timeInterval={28000} />
        </div>
        <div className='heading'>
          <h1>
            PORTRAIT SHOOT <span>📸</span>
          </h1>
          <p>
            "Every portrait tells a story, revealing the beauty, vulnerability,
            and strength within each individual."
          </p>
        </div>
        <div className='image_col'>
          <Carousel images={imageContainerTwo} timeInterval={10000} />
        </div>
      </div>
      <div className='portrait_col2'>
        <div className='image_col1'></div>
        <div className='image_col2'>
          <Carousel images={imageContainerThree} timeInterval={17000} />
        </div>
        <div className='image_col2'></div>
        <div className='image_col2'>
          <Carousel images={imageContainerFour} timeInterval={27000} />
        </div>
        <div className='image_col2'>
          <Carousel images={imageContainerFive} timeInterval={22000} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portrait;
