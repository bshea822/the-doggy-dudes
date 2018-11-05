import React, { Component } from 'react';

class DogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return(
      <div className="row large-offset-1">
        <label>
          <input
            id={this.props.dogInfo.name}
            value={this.props.dogInfo.name}
            type='checkbox'
            onChange={this.props.handleSelectDog}
          />
          {this.props.dogInfo.name}
        </label>
      </div>
    )
  }
}

export default DogContainer;
