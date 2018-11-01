import React, { Component } from 'react';
import DogContainer from './DogContainer';

class UserDogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    if (this.props.currentUser.dogs) {
      let dogs = this.props.currentUser.dogs.map((dog) => {
        return(
          <DogContainer
            key={dog.id}
            dogInfo={dog}
            handleSelectDog={this.props.handleSelectDog}
          />
        )
      })
      return(
        <div>
          <div className="grid-x">
            <div className="cell large-6 large-offset-1">
              <h1>Dogs:</h1>
              {dogs}
            </div>
          </div>
          <button className="button" onClick={this.props.toggleDogForm}>Add A Dog</button>
        </div>
      )
    } else {
      return(
        <div>
          <h1>No Dogs</h1>
        </div>
      )
    }
  }
}

export default UserDogsContainer;
