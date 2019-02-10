import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
        <div className="row">
          <div className="col-full ss-copyright">
            <span>© Copyright Sublime 2018</span>
            <span>Design by <a href="https://www.styleshout.com/">Styleshout</a></span>
          </div>
        </div>
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">Back to Top</a>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}
