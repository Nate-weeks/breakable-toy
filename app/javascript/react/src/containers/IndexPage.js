import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentTile from '../components/StudentTile'
import NewStudentFormContainer from './NewStudentFormContainer'
import ToggleFormButton from '../components/ToggleFormButton'
import UpdateStudentFormContainer from './UpdateStudentFormContainer'
import TransferStudentFormContainer from './TransferStudentFormContainer'


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: [],
      toggleNewStudent: false,
      toggleNewStudentClass: 'hollow button',
      studentBeingEdited: "",
      studentBeingTransferred: ""
    }
    this.addNewStudent = this.addNewStudent.bind(this)
    this.handleToggleNewStudent = this.handleToggleNewStudent.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
    this.StudentEditSelect = this.StudentEditSelect.bind(this)
    this.updateStudent = this.updateStudent.bind(this)
    this.transferStudent = this.transferStudent.bind(this)
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

    transferStudent(formPayload){
      fetch(`/api/v1/facilities/${formPayload.new_division_id}`, {
        credentials: 'same-origin',
        method: 'PATCH',
        headers: {},
        body: formPayload
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
          studentsArray: body,
          toggleNewStudent: false,
          toggleNewStudentClass: 'hollow button',
          studentBeingEdited: "",
          studentBeingTransferred: ""
        })
      })
      .catch(error => console.error('Error in fetch: ${error.message}'));
    }


    updateStudent(formData){
      let classroom_id = this.props.match.params.id
      let student_id = formData.student_id
      fetch(`/api/v1/classrooms/${classroom_id}/students/${student_id}`,{
        credentials: 'same-origin',
        headers: {},
        method: 'PATCH',
        body: formData
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          studentsArray: body,
          studentBeingEdited: ""
        })
      })
    }

    addNewStudent(formData){
      let id = this.props.match.params.id
      fetch(`/api/v1/classrooms/${id}/students`,{
        credentials: 'same-origin',
        headers: {},
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        studentsArray: this.state.studentsArray.concat(body),
        toggleNewStudent: false,
        toggleNewStudentClass: 'hollow button',
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
          toggleNewStudentClass: 'button success',
          studentBeingTransferred: "",
          studentBeingEdited: ""
         })
      } else {
        this.setState({
        toggleNewStudent: false,
        toggleNewStudentClass: 'hollow button'
        })
      }
    }

    StudentEditSelect(student_id){
      this.setState ({
        studentBeingEdited: student_id,
        toggleNewStudent: false,
        toggleNewStudentClass: 'hollow button',
        studentBeingTransferred: ""
      })
      console.log(this.state.studentBeingEdited)
    }

    StudentTransferSelect(student_id){
      this.setState ({
        studentBeingTransferred: student_id,
        studentBeingEdited: "",
        toggleNewStudent: false,
        toggleNewStudentClass: 'hollow button'
      })
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

    let transferStudentForm;
    if (this.state.studentBeingTransferred != "") {
      transferStudentForm =
      <TransferStudentFormContainer
      classroom_id={this.props.match.params.id}
      student_id={this.state.studentBeingTransferred}
      transferStudent={this.transferStudent} />
    }

    let students = this.state.studentsArray.map(student => {
      let handleDeleteStudent = () => {
        this.deleteStudent(student.id)
      }

    let handleStudentEditSelect = () => {
      this.StudentEditSelect(student.id)
    }

    let handleStudentTransferSelect = () => {
      this.StudentTransferSelect(student.id)
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
          picture = {student.avatar.url}
          handleClick = {handleDeleteStudent}
          handleStudentUpdateClick = {handleStudentEditSelect}
          handleStudentTransferClick = {handleStudentTransferSelect}
        />
      )
    })

    return(
      <div className="button-container">
        {toggleFormButton}
        {newStudentForm}
        {updateStudentForm}
        {transferStudentForm}
        <h1>Patients:</h1>

        <div className="grid-x">
          {students}
        </div>

      </div>
    )
  }
}

export default IndexPage
