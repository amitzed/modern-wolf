import React, {Component} from 'react';
export default class Newsletter extends Component {
  render() {
    return (<React.Fragment>
      <section id="newsletter" className="s-testimonials">
        <div className="testimonials__icon" data-aos="fade-up"/>
        <div className="row testimonials narrow">
          <div className="col-full testimonials__slider" data-aos="fade-up">
            <div className="testimonials__slide">
              <p>Hope takes me where it wants to go, every time I open up that door. Chain-smoke with a lump stuck in my throat, hope takes away my self-control.</p>
              <div className="testimonials__author">
                Self Control
                <span>(Original Version)</span>
              </div>
            </div>

            <div className="testimonials__slide">
              <p>Shark's vein, it's always colder, when you brainwash to deceive. Campaign, it's always better, when you lie right through your teeth.</p>
              <div className="testimonials__author">
                Sociopath Bloodbath
                <span>(Original Version)</span>
              </div>
            </div>

            <div className="testimonials__slide">
              <p>Take my criticism, squeeze it, 'til its blood drips on the floor. Take my opposition, smash it, 'til I'm scared to speak up anymore. He says "In me you must believe, fascism is for my self-esteem."</p>
              <div className="testimonials__author">
                Bottles Burn Like 1985
                <span>(Original Version)</span>
              </div>
            </div>
            {/* end __slide */}
          </div>
          {/* end __slider */}
        </div>

      </section>
      {/* end s-testimonials */}
    </React.Fragment>);
  }
}
