import React, { useRef } from 'react';

import './styles.scss';
import { Animated } from 'react-animated-css';
import data from '../../data/db';

const Home = () => {
  const [state, setState] = React.useState(data);

  let singleRefs = [];

  React.useEffect(() => {
    (async () => {
      // console.log('state', state);
      singleRefs.forEach(ref => {
        observer.observe(ref);
      });
    })();
  }, [setState]);

  const handleIntersectionObserver = entries => {
    let entry = entries[0];

    entry.target.className = entry.isIntersecting
      ? 'each-event animated'
      : 'each-event';
  };

  const observer = new IntersectionObserver(handleIntersectionObserver, {
    threshold: 0.7,
    root: null,
    rootMargin: '0px 0px 0px 0px',
  });

  return (
    <div className="wrapper">
      {state.events.map((event, index) => {
        return (
          <div
            ref={ref => (singleRefs[singleRefs.length] = ref)}
            className="each-event"
            key={event.id}
          >
            <div className="event-description">
              <figure className="figure">
                <div className='flex-center'>
                  <img src={event.figure} alt={event.date} title={event.date} />
                </div>
                <figcaption>
                  <div className="figure_date">{event.date}</div>
                  <div className="figure_description">{event.description}</div>
                </figcaption>
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
