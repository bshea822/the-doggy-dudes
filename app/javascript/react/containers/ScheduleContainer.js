import React, { Component } from 'react';
import ScheduleFormContainer from './ScheduleFormContainer';
import ScheduleTable from './ScheduleTable';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickups: [],
      dateOrder: "Ascending"
    };
    this.displaySelectedDogs = this.displaySelectedDogs.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/pickups',
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
    .then(response => {
      let unsorted = response.pickups;
      let sorted = unsorted.sort((a,b) => {
        return new Date(a.pickup_date) -
          new Date(b.pickup_date);
      });
      return sorted;
    })
    .then(response => {
      this.setState({ pickups: response });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  displaySelectedDogs() {
    let showDogs = ``;
    this.props.selectedDogs.forEach((dog) => {
      showDogs += `${dog.name}, `;
    });

    return showDogs.substring((showDogs.length - 2), -1);
  }

  sortByDate(event) {
    if (this.state.dateOrder === "Ascending") {
      let descending = this.state.pickups.reverse();
      this.setState(
        {
          pickups: descending,
          dateOrder: "Descending"
        }
      );
    } else {
      let ascending = this.state.pickups.reverse();
      this.setState(
        {
          pickups: ascending,
          dateOrder: "Ascending"
        }
      );
    }
  }

  render() {
    return(
      <div className="grid-x">
        <div className="row">
          <p>Selected Dogs: {this.displaySelectedDogs()}</p>
          <div className="grid-x grid-margin-x">
            <div className="cell large-4">
              <ScheduleFormContainer />
            </div>
            <div className="cell large-8">
              <ScheduleTable
                pickups={this.state.pickups}
                sortByDate={this.sortByDate}
                dateOrder={this.state.dateOrder}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScheduleContainer;
