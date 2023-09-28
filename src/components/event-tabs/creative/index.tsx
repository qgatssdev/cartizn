import Footer from '../../footer';
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
        <div className='image_col'></div>
        <div className='image_col'></div>
      </div>
      <div className='creative_col2'>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div className='image_col4'></div>
        <div className='image_col3'></div>
        <div className='image_col1'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Creative;
