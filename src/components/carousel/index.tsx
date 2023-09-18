import { useState, useEffect } from 'react';
import './styles.scss';

type Props = {
  timeInterval?: number;
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const nextImage = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`carousel-image ${
            index === currentIndex ? 'visible' : ''
          }`}
        />
      ))}
    </>
  );
};

export default Carousel;
