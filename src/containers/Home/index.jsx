import React, { createRef } from 'react';

import './styles.scss';
// import { Animated } from 'react-animated-css';
import data from '../../data/db';

const Home = () => {
  const [state, setState] = React.useState(data);
  const singleRefs = [];
  const refVideo = createRef();

  const handleIntersectionObserver = entries => {
    let entry = entries[0];

    entry.target.className = entry.isIntersecting
      ? 'each-event animated'
      : 'each-event';
  };

  const handleVideoObserver = entries => {
    let entry = entries[0];

    if (entry.isIntersecting) entry.target.play();
    else entry.target.pause();
  };

  const observer = new IntersectionObserver(handleIntersectionObserver, {
    threshold: 0.7,
    root: null,
    rootMargin: '0px 0px 0px 0px',
  });

  const videoObserver = new IntersectionObserver(handleVideoObserver, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    (async () => {
      // console.log('state', state);
      singleRefs.forEach(ref => {
        observer.observe(ref);
      });
    })();
    // console.log(refVideo);

    videoObserver.observe(refVideo.current);
  }, [setState]);
  return (
    <section className="wrapper" alt="contenido">
      <article className="video-container">
        <video
          className="video"
          ref={refVideo}
          loop
          controls
          controlsList="nodownload"
        >
          <source
            src="https://kreuk2099.s3.amazonaws.com/presentation-brianna-romina.mp4"
            type="video/mp4"
          ></source>
        </video>
      </article>
      {state.events.map(event => {
        return (
          <div
            ref={ref => (singleRefs[singleRefs.length] = ref)}
            className="each-event"
            key={event.id}
          >
            <div className="event-description">
              <figure className="figure">
                <div className="flex-center">
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
    </section>
  );
};

export default Home;
