import { useEffect, useRef, useState } from 'react';
import Home from './pages/home';
import Events from './pages/events';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.scss';
gsap.registerPlugin(ScrollTrigger);

//

function App() {
  const eventsRef = useRef<HTMLDivElement>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        window.scrollTo({
          top: eventsRef.current?.getBoundingClientRect().bottom,
          behavior: 'auto',
        });
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className='container'>
      <div className='section'>
        <Home />
      </div>
      <div className='section' ref={eventsRef}>
        <Events />
      </div>
    </div>
  );
}

export default App;
