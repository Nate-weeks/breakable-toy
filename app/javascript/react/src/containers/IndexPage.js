import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentTile from '../components/StudentTile'


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/classrooms/${this.props.match.params.id}/students.json`, {
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
      <h1>Students:</h1>
      <p><Link to='/schools/:id/classrooms/:id/students/new'>Add a Student</Link></p>
      {students}
      </div>
    )
  }
}

export default IndexPage
