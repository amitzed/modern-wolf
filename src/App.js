import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
// import Wolfimage from './components/wolfimage/wolfimage';
import About from './components/about/about';
import Music from './components/music/music';
import Video from  './components/video/video';
// import Find from './components/find/find';
// import Saying from './components/saying/saying';
import Preloader from './components/preloader/preloader';
import Photoswipe from  './components/photoswipe/photoswipe';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Video />
        <Music />


        <Preloader />
        <Photoswipe />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
