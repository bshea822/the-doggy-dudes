import React, { Component } from 'react';
import ScheduleForm from './ScheduleForm';
import ScheduleTable from './ScheduleTable';

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
      <div className="grid-x">
        <div className="row">
          <p>Selected Dogs: {this.displaySelectedDogs()}</p>
          <div className="grid-x">
            <div className="cell large-3">
              <ScheduleForm />
            </div>
            <div className="cell large-9">
              <ScheduleTable />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScheduleContainer;
