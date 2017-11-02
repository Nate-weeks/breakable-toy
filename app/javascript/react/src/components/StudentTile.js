import React, {Component} from 'react';

const StudentTile = props => {

  return(
    <div className="small-3 cell student-tile">
      <p>{props.firstName} {props.lastName}</p>
      <p>{props.age}</p>
      <p>{props.address}</p>
      <p>{props.phone_number}</p>
    </div>
  )

}

export default StudentTile
