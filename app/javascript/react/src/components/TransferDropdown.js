import React from 'react';

const TransferDropdown = props => {
  return(
    <form>
      <label>
        Pick a Facility
        <select>
          <option value={props.value}>{props.value}</option>
        </select>
      </label>

    </form>
  )
}

export default TransferDropdown
