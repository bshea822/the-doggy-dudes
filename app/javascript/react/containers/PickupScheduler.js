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
    if (!this.state.selectedDogs.includes(event.target.id)) {
      let newDog = event.target.id;
      let newSelectedDogs = [];
      newSelectedDogs.push(newDog);
      this.setState({ selectedDogs: this.state.selectedDogs.concat(newSelectedDogs) });
    } else {
      let index = this.state.selectedDogs.indexOf(event.target.id);
      let newSelectedDogs = this.state.selectedDogs;
      newSelectedDogs.splice(index, 1);
      this.setState({ selectedDogs: newSelectedDogs });
    }
  }

  render() {
    return(
      <div className="grid-x">
        <div className="row">
          <div className="cell large-4 large-offset-1">
            <UserDogsContainer
              currentUser={this.props.currentUser}
              handleSelectDog={this.handleSelectDog}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PickupScheduler;
