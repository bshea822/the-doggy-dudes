import React from 'react';
import moment from 'moment';

const TableComponent = (props) => {

  return(
    <tr>
      <td data-label="Dog">{props.dogName}</td>
      <td data-label="Play Group">{props.serviceName} {moment(props.pickupTime).format('h:mm')}-{moment(props.dropoffTime).format('h:mm')}</td>
      <td data-label="Play Date">{props.pickupDate}</td>
    </tr>
  );
};

export default TableComponent;
