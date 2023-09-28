import Footer from '../../footer';
import './styles.scss';

const Portrait = () => {
  return (
    <div className='portrait_container'>
      <div className='portrait_col1'>
        <div className='image_col'></div>
        <div className='heading'>
          <h1>
            PORTRAIT SHOOT <span>📸</span>
          </h1>
          <p>
            "Every portrait tells a story, revealing the beauty, vulnerability,
            and strength within each individual."
          </p>
        </div>
        <div className='image_col'></div>
      </div>
      <div className='portrait_col2'>
        <div className='image_col1'></div>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Portrait;
