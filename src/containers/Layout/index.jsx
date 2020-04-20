import React from 'react';
import './styles.scss'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
const Layout = props => {
  return (
    <main className="container">
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
