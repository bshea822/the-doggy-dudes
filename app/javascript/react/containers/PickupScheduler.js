import React, { Component } from 'react';
import UserDogsContainer from './UserDogsContainer';

class PickupScheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDogs: []
    };
    this.handleSelectDog = this.handleSelectDog.bind(this);
  }

  handleSelectDog(event) {

    if (event.target.value === "off") {
      debugger
      let element = document.getElementById(event.target.name);
      let value = element.attributes.value;
      value.innerHTML = "on";
      // event.target.value = "on";
      let newDog = [event.target.name];
      let newSelectedDogs = this.state.selectedDogs.concat(newDog);
      this.setState({ selectedDogs: newSelectedDogs });
    } else {
      event.target.value = "off";
      let index = this.state.selectedDogs.indexOf(event.target.name);
      let newSelectedDogs = this.state.selectedDogs;
      newSelectedDogs.splice(index, 1);
      this.setState({ selectedDogs: newSelectedDogs});
    }
  }

  render() {
    let handleSelectDog = () => this.handleSelectDog(event);
    return(
      <div className="grid-x">
        <div className="cell large-4 large-offset-1">
          <UserDogsContainer
            currentUser={this.props.currentUser}
            handleSelectDog={handleSelectDog}
          />
        </div>
        <p>{this.state.selectedDogs.join(', ')}</p>
      </div>
    )
  }
}

export default PickupScheduler;
