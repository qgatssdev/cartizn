import { useState, useEffect } from 'react';
import './styles.scss';

type Props = {
  timeInterval?: number;
  images: string[];
};

const Carousel = ({ images, timeInterval }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setVisible(true);
      }, 500);
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={images[currentIndex]}
        alt=''
        className={`carousel-image ${visible ? 'visible' : 'hidden'}`}
      />
    </>
  );
};

export default Carousel;
