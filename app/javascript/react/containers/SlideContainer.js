import React, { Component } from 'react';
import SlideTile from '../components/SlideTile';
import Carousel from 'nuka-carousel';

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
      <div className="grid-x slide-component">
          <div className="cell large-8 large-offset-2">
            <Carousel
              autoplay={true}
              wrapAround={true}
            >
              {images}
            </Carousel>
          </div>
      </div>
    )
  }
}

export default SlideContainer;
