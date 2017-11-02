import React, {Component} from 'react';

const StudentTile = props => {

  return(
    <div className="small-3 cell student-tile">
      <h2 className="name">{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <p>Phone Number: {props.contactNumber}</p>
      <p>Incident Reports: </p>
      <p>Behavioral Data: </p>
    </div>
  )

}

export default StudentTile
