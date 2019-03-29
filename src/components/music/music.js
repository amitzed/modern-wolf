import React, {Component} from 'react';
export default class Music extends Component {
  render() {
    return (<React.Fragment>
      <section id="music" className="s-services target-section darker">
        <div className="row section-header bit-narrow" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead" align="center">Music</h3>
            <h1 className="display-1" align="center">
              <ul className="contact-social">
                <li>
                  <a target="_blank" href="https://soundcloud.com/modernwolf"><i className="fab fa-soundcloud"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://open.spotify.com/artist/05vLOX4PuvR1i97vcNBd47"><i className="fab fa-spotify"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UClCyQmIL9wAGrEyTnmj_L-A"><i className="fab fa-youtube"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/modernwolfhowl/"><i className="fab fa-facebook"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://modernwolf.bandcamp.com/"><i className="fab fa-bandcamp"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://music.amazon.com/artists/B01IDKW8JY?tab=CATALOG"><i className="fab fa-amazon"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://play.google.com/store/music/artist/Modern_Wolf?id=Akmwk46zjbj26rtsoz6dtmpr4ke"><i className="fab fa-google-play"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://itunes.apple.com/us/artist/modern-wolf/1359183235"><i className="fab fa-apple"/></a>
                </li>
              </ul>
            </h1>
          </div>
        </div>
        {/* end section-header */}
        <div className="row bit-narrow services block-1-2 block-tab-full">
          <div className="col-block item-service" data-aos="fade-up">
            <div className="item-service__icon">
              <i className="icon-video"/>
            </div>
            <div className="item-service__text">
              <h3 className="item-title">Self Control</h3>
              <p>
                <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/422809755&color=%238cff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p>
            </div>
          </div>
          <div className="col-block item-service" data-aos="fade-up">
            <div className="item-service__icon">
              <i className="icon-video"/>
            </div>
            <div className="item-service__text">
              <h3 className="item-title">Bottles Burn Like 1985</h3>
              <p>
                <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/515692005&color=%238cff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p>
            </div>
          </div>
          <div className="col-block item-service" data-aos="fade-up">
            <div className="item-service__icon">
              <i className="icon-video"/>
            </div>
            <div className="item-service__text">
              <h3 className="item-title">Some Days</h3>
              <p>
                <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471826971&color=%238cff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p>
            </div>
          </div>
          <div className="col-block item-service" data-aos="fade-up">
            <div className="item-service__icon">
              <i className="icon-video"/>
            </div>
            <div className="item-service__text">
              <h3 className="item-title">Self Control (Instrumental)</h3>
              <p>
                <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/422803275&color=%238cff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p>
            </div>
          </div>
        </div>
        {/* end services */}
      </section>
      {/* end s-services */}
    </React.Fragment>);
  }
}
