import React, { Component } from 'react';
import TableComponent from '../components/TableComponent';

class ScheduleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickups: []
    };

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
      this.setState({ pickups: response.pickups });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let pickups = this.state.pickups.map((pickup) => {
      return(
        <TableComponent
          key={pickup.id}
          dogName={pickup.dog.name}
          pickupDate={pickup.date}
          instructions={pickup.instructions}
          pickupTime={pickup.service.pickup_time}
          dropoffTime={pickup.service.dropoff_time}
          serviceName={pickup.service.service_name}
        />
      )
    })
    return(
      <div>
        <table className="responsive-card-table unstriped">
          <thead>
            <tr>
              <th>Dog</th>
              <th>Play Group</th>
              <th>Play Date</th>
            </tr>
          </thead>
          <tbody>
            {pickups}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScheduleTable;
