import React, { Component } from 'react';
import ScheduleForm from './ScheduleForm';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  displaySelectedDogs() {
    let showDogs = ``;
    this.props.selectedDogs.forEach((dog) => {
      showDogs += `${dog.name}, `;
    });

    return showDogs.substring((showDogs.length - 2), -1);
  }

  render() {
    return(
      <div>
        <p>Selected Dogs: {this.displaySelectedDogs()}</p>
        <ScheduleForm />
      </div>
    )
  }
}

export default ScheduleContainer;
