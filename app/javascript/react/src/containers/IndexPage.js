import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentTile from '../components/StudentTile'
import NewStudentFormContainer from './NewStudentFormContainer'
import ToggleFormButton from '../components/ToggleFormButton'
import UpdateStudentFormContainer from './UpdateStudentFormContainer'


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: [],
      toggleNewStudent: false,
      toggleNewStudentClass: 'toggle-button-false',
      studentBeingEdited: ""
    }
    this.addNewStudent = this.addNewStudent.bind(this)
    this.handleToggleNewStudent = this.handleToggleNewStudent.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
    this.StudentEditSelect = this.StudentEditSelect.bind(this)
    this.updateStudent = this.updateStudent.bind(this)
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

    updateStudent(formPayload){
      let classroom_id = this.props.match.params.id
      let student_id = formPayload.student_id
      fetch(`/api/v1/classrooms/${classroom_id}/students/${student_id}`,{
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ student: formPayload })
      })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        this.setState({
          studentsArray: body,
          studentBeingEdited: ""
        })
      })
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
        toggleNewStudentClass: 'toggle-button-false',
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

    StudentEditSelect(student_id){
      this.setState ({
        studentBeingEdited: student_id,
        toggleNewStudent: false,
        toggleNewStudentClass: 'toggle-button-false'
      })
      console.log(this.state.studentBeingEdited)
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

    let updateStudentForm;
    if (this.state.studentBeingEdited != "") {
    updateStudentForm =
    <UpdateStudentFormContainer
    classroom_id={this.props.match.params.id}
    student_id={this.state.studentBeingEdited}
    updateStudent={this.updateStudent}
    />
    }

    let students = this.state.studentsArray.map(student => {
      let handleDeleteStudent = () => {
        this.deleteStudent(student.id)
      }

    let handleStudentEditSelect = () => {
      this.StudentEditSelect(student.id)
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
          handleStudentUpdateClick = {handleStudentEditSelect}
        />
      )
    })

    return(
      <div>
        {toggleFormButton}
        {newStudentForm}
        {updateStudentForm}
        <h1>Patients:</h1>

        <div className="grid-x">
          {students}
        </div>

      </div>
    )
  }
}

export default IndexPage
