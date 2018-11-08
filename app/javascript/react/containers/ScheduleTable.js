import React, { Component } from 'react';
import TableComponent from '../components/TableComponent';

class ScheduleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    let pickups = this.props.pickups.map((pickup) => {
      return(
        <TableComponent
          key={pickup.id}
          dogName={pickup.dog.name}
          pickupDate={pickup.pickup_date}
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
              <th>Play Date<a onClick={this.props.sortByDate}>{this.props.dateOrder}</a></th>
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
