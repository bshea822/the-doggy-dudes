import React from 'react';
import moment from 'moment';

const TableComponent = (props) => {
  return(
    <tr>
      <td data-label="Dog">{props.dogName}</td>
      <td data-label="Play Group">{props.serviceName} {moment(props.pickupTime).utc().format('LT')}-{moment(props.dropoffTime).utc().format('h:mm')}</td>
      <td data-label="Play Date">{moment(props.pickupDate).format('MMMM Do YYYY')}</td>
    </tr>
  );
};

export default TableComponent;
