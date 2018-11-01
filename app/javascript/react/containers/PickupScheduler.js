import React, { Component } from 'react';
import UserDogsContainer from './UserDogsContainer';

class PickupScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDogs: {},
      renderCount: 0
    };

  }

  componentDidUpdate() {
    if (this.state.renderCount === 2) {
      let dogs = [];
      this.props.currentUser.dogs.map(dog => {
        dogs.push(dog.name);
      });
      dogsJson = {};
      dogs.forEach((dog) => {
        dogsJson.dog = false;
      });
      debugger
    }
  }



  // handleSelectDog(event) {
  //
  //   if (event.target.value === "off") {
  //     debugger
  //     let newDog = [event.target.name];
  //     let newSelectedDogs = this.state.selectedDogs.concat(newDog);
  //     this.setState({ selectedDogs: newSelectedDogs });
  //   } else {
  //     event.target.value = "off";
  //     let index = this.state.selectedDogs.indexOf(event.target.name);
  //     let newSelectedDogs = this.state.selectedDogs;
  //     newSelectedDogs.splice(index, 1);
  //     this.setState({ selectedDogs: newSelectedDogs});
  //   }
  // }

  render() {
    this.state.renderCount ++;
    let handleSelectDog = () => this.handleSelectDog(event);
    return(
      <div className="grid-x">
        <div className="cell large-4 large-offset-1">
          <UserDogsContainer
            currentUser={this.props.currentUser}
            handleSelectDog={handleSelectDog}
          />
        </div>
        <p></p>
      </div>
    )
  }
}

export default PickupScheduler;
