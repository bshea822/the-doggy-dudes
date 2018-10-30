import React, { Component } from 'react';
import SlideTile from '../components/SlideTile';

class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1589.JPG",
        "https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1610.JPG",
        "https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/IMG_1612.JPG"
      ]
    };
  }

  render() {
    let keyCount = 0;
    let images = this.state.images.map((image) => {
      return(
        <SlideTile
          key={keyCount += 1}
          image={image}
        />
      )
    })
    return(
      <div>
        <div className="grid-x grid-padding-x align-center">
          <div className="cell large-8">
            <div className="orbit clean-hero-slider" role="region" aria-label="Favorite Space Pictures" data-orbit>
              <div className="orbit-wrapper">
                <div className="orbit-controls">
                  <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                  <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                </div>
                <ul className="orbit-container">
                  {images}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SlideContainer;
