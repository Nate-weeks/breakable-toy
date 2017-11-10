import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const StudentTile = props => {

  let deleteButton = <button className="button tiny" onClick={props.handleClick}>Remove Patient</button>

  let updateButton = <button className="button tiny" onClick={props.handleStudentUpdateClick}>Update Patient</button>


  return(
    <div className="small-12 medium-6 large-3 cell student-tile">
      <img className="student-photo" src={props.picture} alt={`photo of ${props.username}`}/>
      <h2 className="name">{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <p>Contact Number: {props.contactNumber}</p>
      {deleteButton}
      {updateButton}
    </div>
  )

}

export default StudentTile
