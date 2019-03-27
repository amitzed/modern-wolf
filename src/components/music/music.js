import React, {Component} from 'react';
export default class Music extends Component {
  render() {
    return (<React.Fragment>
      <section id="services" className="s-services target-section darker">
        <div className="row section-header bit-narrow" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Music We Make</h3>
            <h1 className="display-1">
              We take pride in what we do. Our music ...
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
