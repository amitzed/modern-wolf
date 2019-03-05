import React, {Component} from 'react';
export default class Preloader extends Component {
  render() {
    return (<React.Fragment>
      <div id="preloader">
        <div id="loader" className="dots-jump">
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </React.Fragment>);
  }
}
