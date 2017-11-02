import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentTile from '../components/StudentTile'
import NewStudentFormContainer from './NewStudentFormContainer'
import ToggleFormButton from '../components/ToggleFormButton'


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: [],
      toggle: false,
      toggleClass: 'toggle-button-false'
    }
    this.addNewStudent = this.addNewStudent.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/classrooms/${this.props.match.params.id}/students`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({studentsArray: body.students})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    addNewStudent(formPayload){
      let id = this.props.match.params.id
      fetch(`/api/v1/classrooms/${id}/students`,{
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ student: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ studentsArray: this.state.studentsArray.concat(body) })
        })
    }

    handleToggle(){
      if (this.state.toggle == false) {
        this.setState({
          toggle: true,
          toggleClass: 'toggle-button-true'
         })
      } else {
        this.setState({
        toggle: false,
        toggleClass: 'toggle-button-false'
        })
      }
    }

  render(){

    let toggleFormButton =
      <ToggleFormButton
      handleToggle={this.handleToggle}
      toggle={this.state.toggleClass}
      />

    let newStudentForm;
    let toggle = this.state.toggle
    if (toggle == true){
      newStudentForm =
      <NewStudentFormContainer
      addNewStudent={this.addNewStudent}
      classroom_id={this.props.match.params.id}
      />
    }

    let students = this.state.studentsArray.map(student => {
      return(
        <StudentTile
          key = {student.id}
          id = {student.id}
          firstName = {student.first_name}
          lastName = {student.last_name}
          address = {student.address}
          age = {student.age}
          contactNumber = {student.phone_number}
        />
      )
    })

    return(
      <div>
        {toggleFormButton}
        {newStudentForm}
        <h1>Students:</h1>
        <div className="grid-container">
          <div className="grid-x">
            {students}
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
