import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentTile from '../components/StudentTile'
import NewStudentFormContainer from './NewStudentFormContainer'


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: []
    }
    this.addNewStudent = this.addNewStudent.bind(this)
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

  render(){
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
      <NewStudentFormContainer
      addNewStudent={this.addNewStudent}
      classroom_id={this.props.match.params.id}
      />
      <h1>Students:</h1>
      <p><Link to='/schools/:id/classrooms/:id/students/new'>Add a Student</Link></p>
      {students}
      </div>
    )
  }
}

export default IndexPage
