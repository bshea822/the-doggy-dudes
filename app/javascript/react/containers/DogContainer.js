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
            name={this.props.dogInfo.name}
            id={this.props.dogInfo.name}
            className="checkbox"
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
