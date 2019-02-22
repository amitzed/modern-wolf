import React, { Component } from 'react';
export default class Find extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="clients" className="s-clients target-section darker">
      <div className="grid-overlay">
        <div />
      </div>
      <div className="row section-header text-center narrow" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Find Us Here Too</h3>
          <h1 className="display-1">Where Our Music Lives</h1>
        </div>
      </div> {/* end section-header */}
      <div className="row clients-wrap" data-aos="fade-up">
        <div className="col-twelve">
          <ul className="clients">
            <li><a target="_blank" href="https://modernwolf.bandcamp.com/">Bandcamp</a></li>
            <li><a target="_blank" href="https://open.spotify.com/artist/05vLOX4PuvR1i97vcNBd47">Spotify</a></li>
            <li><a target="_blank" href="https://soundcloud.com/modernwolf">Soundcloud</a></li>
            <li><a target="_blank" href="#0">Dropbox</a></li>
            <li><a target="_blank" href="#0">Apple</a></li>
            <li><a target="_blank" href="#0">Google</a></li>
            <li><a target="_blank" href="#0">Amazon</a></li>
            <li><a target="_blank" href="https://www.facebook.com/modernwolfhowl/">Facebook</a></li>
            <li><a target="_blank" href="#0">Crucial Music</a></li>
            <li><a target="_blank" href="#0">Apple</a></li>
            <li><a target="_blank" href="#0">Google</a></li>
            <li><a target="_blank" href="#0">CD Baby</a></li>
          </ul>
        </div>
      </div>
    </section> {/* end s-clients */}
      </React.Fragment>
    );
  }
}
