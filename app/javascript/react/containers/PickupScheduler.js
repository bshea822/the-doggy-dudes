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
    if (this.state.selectedDogs.length === 0) {
      let newDog = event.target.id;
      this.state.userDogs.forEach((userDog) => {
        if (newDog === userDog.name) {
          newDog = userDog;
        }
      });
      let newSelectedDogs = [];
      newSelectedDogs.push(newDog);
      this.setState({ selectedDogs: this.state.selectedDogs.concat(newSelectedDogs)});
    } else {
      let index = 0;
      this.state.selectedDogs.forEach((selectedDog) => {
        if (!selectedDog.name.includes(event.target.id)) {
          let newDog = event.target.id;
          this.state.userDogs.forEach((userDog) => {
            if (newDog === userDog.name) {
              newDog = userDog;
            }
          });
          let newSelectedDogs = [];
          newSelectedDogs.push(newDog);
          this.setState({ selectedDogs: this.state.selectedDogs.concat(newSelectedDogs)});
        } else if (selectedDog.name.includes(event.target.id)) {
          let newSelectedDogs = this.state.selectedDogs;
          newSelectedDogs.splice(index, 1);
          this.setState({ selectedDogs: newSelectedDogs});
        }
        index ++;
      });
    }
  }

  render() {
    return(
      <div className="grid-x margin-y">
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
