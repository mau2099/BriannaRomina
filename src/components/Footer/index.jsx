import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h4>
        Hecho con{' '}
        <span role='img' aria-label='amor'>
          💗
        </span>
      </h4>
      <h3>Familia Garcia Sanchez</h3>
      <img
        src='https://kreuk2099.s3.amazonaws.com/penguin-footer.png'
        alt='penguin'
      />
    </footer>
  );
};
export default Footer;
