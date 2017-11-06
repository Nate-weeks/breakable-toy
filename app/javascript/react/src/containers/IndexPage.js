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
      toggleNewStudent: false,
      toggleNewStudentClass: 'toggle-button-false'
    }
    this.addNewStudent = this.addNewStudent.bind(this)
    this.handleToggleNewStudent = this.handleToggleNewStudent.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
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
      this.setState({
        studentsArray: this.state.studentsArray.concat(body),
        toggleNewStudent: false,
        toggleNewStudentClass: 'toggle-button-false'
      })
        })
    }

    deleteStudent(student_id){
      let id = this.props.match.params.id
      let student = student_id
      fetch(`/api/v1/classrooms/${id}/students/${student_id}.json`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
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
      this.setState({ studentsArray: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    handleToggleNewStudent(){
      if (this.state.toggleNewStudent == false) {
        this.setState({
          toggleNewStudent: true,
          toggleNewStudentClass: 'toggle-button-true'
         })
      } else {
        this.setState({
        toggleNewStudent: false,
        toggleNewStudentClass: 'toggle-button-false'
        })
      }
    }

  render(){

    let toggleFormButton =
      <ToggleFormButton
      handleToggle={this.handleToggleNewStudent}
      toggle={this.state.toggleNewStudentClass}
      />

    let newStudentForm;
    let toggle = this.state.toggleNewStudent
    if (toggle == true){
      newStudentForm =
      <NewStudentFormContainer
      addNewStudent={this.addNewStudent}
      classroom_id={this.props.match.params.id}
      />
    }

    let students = this.state.studentsArray.map(student => {
      let handleDeleteStudent = () => {
        this.deleteStudent(student.id)
      }
      return(
        <StudentTile
          key = {student.id}
          id = {student.id}
          firstName = {student.first_name}
          lastName = {student.last_name}
          address = {student.address}
          age = {student.age}
          contactNumber = {student.phone_number}
          handleClick = {handleDeleteStudent}
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
