import React from 'react';
import { footer } from './../../data/db';
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
      <img src={footer.penguin} alt='penguin' />
    </footer>
  );
};
export default Footer;
