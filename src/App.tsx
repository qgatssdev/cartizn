import { useRef } from 'react';
import Home from './pages/home';
import Events from './pages/events';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import './App.scss';
gsap.registerPlugin(Observer);
//

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  Observer.create({
    
  })

  return (
    <div className='container'>
      <div ref={section1Ref}>
        <Home />
      </div>
      <div ref={section2Ref}>
        <Events />
      </div>
    </div>
  );
}

export default App;
