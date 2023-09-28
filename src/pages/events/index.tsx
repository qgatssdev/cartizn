import { useState } from 'react';
import { EVENT_TYPE } from './types';
import Concerts from '../../components/event-tabs/concerts';
import Portrait from '../../components/event-tabs/portrait';
import Creative from '../../components/event-tabs/creative';
import './styles.scss';

const Events = () => {
  const [eventType, setEventType] = useState(EVENT_TYPE.CONCERTS);

  const getEventComponent = () => {
    switch (eventType) {
      case EVENT_TYPE.CONCERTS:
        return <Concerts />;
      case EVENT_TYPE.PORTRAIT:
        return <Portrait />;
      case EVENT_TYPE.CREATIVE:
        return <Creative />;
      default:
        break;
    }
  };

  return (
    <div className='events_main__container'>
      <div className='events_wrapper'>
        <div className='events_header'>
          <div
            className={`events_link ${
              eventType === EVENT_TYPE.CONCERTS && 'active'
            }`}
            onClick={() => setEventType(EVENT_TYPE.CONCERTS)}
          >
            <p>CONCERTS & EVENTS 🔥</p>
          </div>
          <div
            className={`events_link ${
              eventType === EVENT_TYPE.PORTRAIT && 'active'
            }`}
            onClick={() => setEventType(EVENT_TYPE.PORTRAIT)}
          >
            <p>PORTRAIT SHOOT 📸</p>
          </div>
          <div
            className={`events_link ${
              eventType === EVENT_TYPE.CREATIVE && 'active'
            }`}
            onClick={() => setEventType(EVENT_TYPE.CREATIVE)}
          >
            <p>CREATIVE SHOOT ✨</p>
          </div>
          <div className='events_link'>
            <p>LETS TALK 📨</p>
          </div>
        </div>
        <div className='events_types'>{getEventComponent()}</div>
      </div>
    </div>
  );
};

export default Events;
