import React, { Component } from 'react';
import DogContainer from './DogContainer';
import NewDogForm from './NewDogForm';

class UserDogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDogForm: true,
      formButtonName: "Add A Dog"
    };
    this.toggleAddDogForm = this.toggleAddDogForm.bind(this);

  }

  toggleAddDogForm() {
    this.setState({ showAddDogForm: !this.state.showAddDogForm });
    if (this.state.showAddDogForm === false) {
      this.setState({ formButtonName: "Add A Dog" });
    } else {
      this.setState({ formButtonName: "Close Form" });
    }
  }



  render() {
    if (this.props.userDogs) {
      let dogs = this.props.userDogs.map((dog) => {
        return(
          <DogContainer
            key={dog.id}
            dogInfo={dog}
            handleSelectDog={this.props.handleSelectDog}
          />
        )
      })
      return(
        <div className="grid-x">
          <div className="row">
            <h1>Dogs:</h1>
            {dogs}
          </div>
          <div className="row">
            <button className="button" onClick={this.toggleAddDogForm}>{this.state.formButtonName}</button>
          </div>
          <div className="row">
            {!this.state.showAddDogForm && <NewDogForm
              addNewDog={this.props.addNewDog}
              toggleAddDogForm={this.toggleAddDogForm}
              />
            }
          </div>
        </div>
      )
    } else {
      return(
        <div className="grid-x">
          <div className="row">
            <h1>No Dogs</h1>
          </div>
          <div className="row">
            <button className="button" onClick={this.toggleAddDogForm}>{this.state.formButtonName}</button>
          </div>
        </div>
      )
    }
  }
}

export default UserDogsContainer;
