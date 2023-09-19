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
      setVisible(false); // Start the fade-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setVisible(true); // Start the fade-in animation
      }, 500); // Adjust the timeout to match your CSS transition duration
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
