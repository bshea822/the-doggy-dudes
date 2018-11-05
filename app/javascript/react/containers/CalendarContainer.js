import React, { Component } from 'react';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  displaySelectedDogs() {
    showDogs = ``;
    this.props.selectedDogs.forEach((dog) => {
      showDogs += `${dog.name}, `;
    });

    showDogs.chomp
  }

  render() {
    return(
      <div>
        <p>Selected Dogs: </p>

      </div>
    )
  }
}

export default CalendarContainer;
