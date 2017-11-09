import React, {Component} from 'react';

class NewStudentFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      age: '',
      contactNumber: '',
      errors: [],
      profilePhoto: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value})
  }

  handleImageChange(files){
    this.setState({
      profilePhoto: files[0]
    })
  }

  clearForm(){
    this.setState({
      firstName: '',
      lastName: '',
      address: '',
      age: '',
      contactNumber: '',
      errors: []
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.firstName == '' || this.state.lastName == '' || this.state.age == ''){
      let error_array = []
      if (this.state.firstName == '' || this.state.lastName == ''){
        error_array.push("please fill out a first name and last name.")
      } else if (this.state.age == ''){
        error_array.push("please include an age.")
      }
      this.setState({errors: error_array})
    } else {
      let formPayload = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        address: this.state.address,
        age: this.state.age,
        phone_number: this.state.contactNumber,
        classroom_id: this.props.classroom_id
      }
      let formData = new FormData()
      formData.append('kidPhoto', this.state.profilePhoto)
      formData.append('formPayload', JSON.stringify(formPayload))
      this.props.addNewStudent(formData);
      this.clearForm();
    }
  }

  render(){
    let errors = this.state.errors
    let error_messages = []
    if(errors.length > 0){
      error_messages = errors.map( error => {
        return(
          <li>{error}</li>
        )
      })
    }

    return(
  <form className='student-form'>
    <h3 className='student-form-header'>New Patient</h3>
    <ul>{errors}</ul>
    <label>First Name
      <input
        name={"firstName"}
        value={this.state.firstName}
        onChange={this.handleChange}
        type="text"
      />
    </label>

    <label>Last Name
      <input
        name={"lastName"}
        value={this.state.lastName}
        onChange={this.handleChange}
        type="text"
      />
    </label>

    <label>Age
      <input
        name={"age"}
        value={this.state.age}
        onChange={this.handleChange}
        type="text"
      />
    </label>

    <label>Address
      <textarea
        name={"address"}
        value={this.state.address}
        onChange={this.handleChange}
        type="text"
      />
    </label>

    <label>Phone Number
      <input
        name={"contactNumber"}
        value={this.state.contactNumber}
        onChange={this.handleChange}
        type="text"
      />
    </label>

    <label>Client Picture
      <input
        type="file"
        onChange={(e) => this.handleImageChange(e.target.files)}
      />
    </label>


    <button className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
  </form>
    )
  }
}

export default NewStudentFormContainer
