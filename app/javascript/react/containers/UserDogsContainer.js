import React, { Component } from 'react';
import DogContainer from './DogContainer';
import NewDogForm from './NewDogForm';

class UserDogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDogForm: true
    };
    this.toggleAddDogForm = this.toggleAddDogForm.bind(this);
  }

  toggleAddDogForm(event) {
    this.setState({ showAddDogForm: !this.state.showAddDogForm });
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
            <div className="row">
              <div className="cell large-6 large-offset-1">
                <h1>Dogs:</h1>
                {dogs}
              </div>
            </div>
          </div>
          <div className="grid-x">
            <div className="row">
              <button className="button" onClick={this.toggleAddDogForm}>Add A Dog</button>
            </div>
          </div>
          <div className="grid-x">
            <div className="row">
              {!this.state.showAddDogForm && <NewDogForm />}
            </div>
          </div>
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
