import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
        <div className="row">
          <div className="col-full ss-copyright">
            <span>© Copyright Modern Wolf 2019</span>
            <span>Design by <a href="https://modernwolf.bandcamp.com/">Modern Wolf</a></span>
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
