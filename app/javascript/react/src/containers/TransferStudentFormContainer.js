import React, {Component} from 'react';
import TransferDropdown from '../components/TransferDropdown';

class TransferStudentFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      facilities: [],
      facilityValue: "",
      divisionValue: ""
    }
    this.handleFacilityChange = this.handleFacilityChange.bind(this)
    this.handleDivisionChange = this.handleDivisionChange.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/facilities`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {}
    })
    .then (response => {
      if (response.ok) {
        return response;
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        facilities: body
      })
    })
    .catch(error => console.error('Error in fetch: ${error.message}'));
  }

  handleFacilityChange(event){
    let value = event.target.value
    this.setState({
      facilityValue: value,
    })
  }

  handleDivisionChange(event){
    let value = event.target.value
    this.setState({
      divisionValue: value,
    })
  }


  render(){
    console.log(this.state.divisionValue)
    let transferFacility;
    if (this.state.facilityValue !== "") {
      transferFacility = this.state.facilities.filter(facility => facility.name == this.state.facilityValue
      )
    }

    let transferDivisionForm
    if (transferFacility) {
      transferDivisionForm = <select value={this.state.divisionValue} onChange={this.handleDivisionChange}> {transferFacility[0].divisions.map(division => <option key={division.id} value={division.name}>{division.name}</option>
      )};
      </select>
    }

    let transferFacilityForm = <select value={this.state.facilityValue} onChange={this.handleFacilityChange}> {this.state.facilities.map(facility => <option key={facility.id} value={facility.name}>{facility.name}</option>
    )};
    </select>



    return(
      <div className="dropdown">
      <h1>Transfer Patient:</h1>
      {transferFacilityForm}
      {transferDivisionForm}
      </div>

    )
  }
}

export default TransferStudentFormContainer
