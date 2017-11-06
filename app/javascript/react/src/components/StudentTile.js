import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const StudentTile = props => {

  let deleteButton = <button onClick={props.handleClick}>Delete Student</button>
  

  return(
    <div className="small-3 cell student-tile">
      <h2 className="name">{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <p>Contact Number: {props.contactNumber}</p>
      <p>Incident Reports: </p>
      <p>Behavioral Data: </p>
      {deleteButton}
    </div>
  )

}

export default StudentTile
