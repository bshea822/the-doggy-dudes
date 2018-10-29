import React, { Component } from 'react';
import { Link } from 'react-router';

class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return(
      <div className="grid-x grid-padding-x align-center">
        <div className="cell large-8">
          <div className="orbit clean-hero-slider" role="region" aria-label="Favorite Space Pictures" data-orbit>
            <div className="orbit-wrapper">
              <div className="orbit-controls">
                <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
              </div>
              <ul className="orbit-container">
                <li className="orbit-slide">
                  <figure className="orbit-figure">
                    <img className="orbit-image" src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1589.JPG" alt="image alt text" />
                  </figure>
                </li>
                <li className="orbit-slide">
                  <figure className="orbit-figure">
                    <img className="orbit-image" src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1610.JPG" alt="image alt text" />
                  </figure>
                </li>
                <li className="orbit-slide">
                  <figure className="orbit-figure">
                    <img className="orbit-image" src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1612.JPG" alt="image alt text" />
                  </figure>
                </li>
              </ul>
            </div>
            <nav className="orbit-bullets">
              <button className="is-active" data-slide="1"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
              <button data-slide="2"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
              <button data-slide="3"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
            </nav>
          </div>
        </div>
      </div>

    )
  }
}

export default SlideContainer;
