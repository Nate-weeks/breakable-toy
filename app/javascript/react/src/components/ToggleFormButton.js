import React from 'react';

const ToggleFormButton = props => {

  return(
      <button className={props.toggle} onClick={props.handleToggle}>Add a Patient</button>
  )
}

export default ToggleFormButton
