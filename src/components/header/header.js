import React, {Component} from 'react';
export default class Header extends Component {
  render() {
    return (<React.Fragment>
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="images/logo.svg" alt="Homepage"/>
          </a>
        </div>
        {/* end header-logo */}
        <nav className="header-nav">
          <a href="#0" className="header-nav__close" title="close">
            <span>Close</span>
          </a>
          <h3>Navigate to</h3>
          <div className="header-nav__content">
            <ul className="header-nav__list">
              <li>
                <a className="smoothscroll" href="#home" title="home">Home</a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">About</a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="services">Music</a>
              </li>
              <li>
                <a className="smoothscroll" href="#works" title="works">Video</a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="contact">Contact</a>
              </li>
            </ul>
            <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum
              <a href="#0">voluptatem</a>
              porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
            <ul className="header-nav__social">
              <li>
                <a target="_blank" href="https://www.facebook.com/modernwolfhowl/"><i className="fab fa-facebook"/></a>
              </li>
              <li>
                <a target="_blank" href="#0"><i className="fab fa-twitter"/></a>
              </li>
              <li>
                <a target="_blank" href="#0"><i className="fab fa-instagram"/></a>
              </li>
              <li>
                <a target="_blank" href="https://soundcloud.com/modernwolf"><i className="fab fa-soundcloud"/></a>
              </li>
              <li>
                <a target="_blank" href="https://open.spotify.com/artist/05vLOX4PuvR1i97vcNBd47"><i className="fab fa-spotify"/></a>
              </li>
            </ul>
          </div>
          {/* end header-nav__content */}
        </nav>
        {/* end header-nav */}
        <a className="header-menu-toggle" href="#0">
          <span className="header-menu-icon"/>
        </a>
      </header>
      {/* end s-header */}
    </React.Fragment>);
  }
}
