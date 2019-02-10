import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact" className="s-contact target-section">
        <div className="grid-overlay">
          <div />
        </div>
        <div className="row section-header narrow" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Get In Touch</h3>
            <h1 className="display-1">Feel free to contact us for any <br /> music idea or collaboration</h1>
          </div>
        </div> {/* end section-header */}
        <div className="row contact-main" data-aos="fade-up">
          <div className="col-full">
            <p className="contact-email">
              <a href="mailto:#0">modernwolfhowl@gmail.com</a>
            </p>
            <p className="contact-address">
              1234 Main Street <br />
            Brooklyn, NY, 12524 US
            </p>
            <p className="contact-numbers">
              +1 (212) 555 5555 &nbsp; +1 (212) 471 7777
            </p>
            <ul className="contact-social">
              <li>
                <a href="#0"><i className="fab fa-facebook" /></a>
              </li>
              <li>
                <a href="#0"><i className="fab fa-twitter" /></a>
              </li>
              <li>
                <a href="#0"><i className="fab fa-instagram" /></a>
              </li>
              <li>
                <a href="#0"><i className="fab fa-behance" /></a>
              </li>
              <li>
                <a href="#0"><i className="fab fa-dribbble" /></a>
              </li>
            </ul>
          </div>
        </div>
      </section> {/* end s-contact */}
      </React.Fragment>
    );
  }
}
