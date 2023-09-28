import Footer from '../../footer';
import './styles.scss';

const Concerts = () => {
  return (
    <div className='concert_container'>
      <div className='concert_col1'>
        <div className='image_col'></div>
        <div className='image_col'></div>
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
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div className='image_col2'></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Concerts;
