import React, { Component } from 'react';
import SlideContainer from './SlideContainer';
import FreeTrial from '../components/FreeTrial';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return(
      <div>
        <SlideContainer />
        <FreeTrial />
      </div>
    )
  }
}

export default HomePage;
