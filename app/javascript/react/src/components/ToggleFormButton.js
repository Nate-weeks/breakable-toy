import React from 'react';

const ToggleFormButton = props => {

  return(
    <button className={props.toggle} onClick={props.handleToggle}>Add a Student</button>
  )
}

export default ToggleFormButton
