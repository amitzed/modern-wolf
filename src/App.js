import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Preloader from './components/preloader/preloader';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
import Video from './components/video/video';
import Image from  './components/image/image';
// import Find from './components/find/find';
import Newsletter from './components/newsletter/newsletter';
import Photoswipe from  './components/photoswipe/photoswipe';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preloader />
        <Header />
        <Home />
        <Music />
        <Video />
        <Image />

        <Newsletter />
        <Photoswipe />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
