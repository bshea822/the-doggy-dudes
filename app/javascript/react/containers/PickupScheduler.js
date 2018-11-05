import React, { Component } from 'react';
import UserDogsContainer from './UserDogsContainer';

class PickupScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDogs: [],
      userDogs: []
    };
    this.handleSelectDog = this.handleSelectDog.bind(this);
    this.addNewDog = this.addNewDog.bind(this);
  }

  addNewDog(formPayload) {
    fetch("api/v1/dogs", {
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"},
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ userDogs: data.dogs });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    fetch('/api/v1/users',
    {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ userDogs: data.user.dogs });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
              userDogs={this.state.userDogs}
              handleSelectDog={this.handleSelectDog}
              addNewDog={this.addNewDog}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PickupScheduler;
