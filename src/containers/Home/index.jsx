import React, { createRef, useMemo, useEffect } from 'react';

import './styles.scss';
import { events, presentation } from './../../data/db';


const Home = () => {
  const eventRefs = [];
  const refVideo = createRef();

  const handleIntersectionObserver = (entries) => {
    const entry = entries[0];

    entry.target.className = entry.isIntersecting
      ? 'each-event animated'
      : 'each-event';
  };

  const handleVideoObserver = (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) entry.target.play();
    else entry.target.pause();
  };

  const videoObserver = new IntersectionObserver(handleVideoObserver, {
    threshold: 0,
  });

  const createEventObservers = () => {
    eventRefs.forEach((ref) => {
      const observer = new IntersectionObserver(handleIntersectionObserver, {
        threshold: 0.7,
        root: null,
        rootMargin: '0px 0px 0px 0px',
      });
      observer.observe(ref);
    });
  };

  useMemo(createEventObservers, [createEventObservers]);

  useEffect(() => {
    createEventObservers();
    videoObserver.observe(refVideo.current);
  });

  return (
    <section className='wrapper' alt='contenido'>
      <article className='video-container'>
        <video
          className='video'
          ref={refVideo}
          loop
          controls
          controlsList='nodownload'
          poster={presentation.poster}
        >
          <source
            src={presentation.video}
            type='video/mp4'
          ></source>
        </video>
      </article>
      {events.map((event) => {
        return (
          <div
            ref={(ref) => (eventRefs[eventRefs.length] = ref)}
            className='each-event'
            key={event.id}
          >
            <div className='event-description'>
              <figure className='figure'>
                <div className='flex-center'>
                  {event.type === 'mp4' ? (
                    <video
                      className='video'
                      loop
                      controls
                      autoPlay={false}
                      controlsList='nodownload'
                      poster={event.poster}
                    >
                      <source src={event.figure} type='video/mp4' />
                    </video>
                  ) : (
                    <img
                      src={event.figure}
                      alt={event.date}
                      title={event.date}
                    />
                  )}
                </div>
                <figcaption>
                  <div className='figure_date'>{event.date}</div>
                  <div className='figure_description'>{event.description}</div>
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
