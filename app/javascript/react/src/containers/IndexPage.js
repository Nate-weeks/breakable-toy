import React, {Component} from 'react';
import {link} from 'react-router-dom';

class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      studentsArray: []
    }
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
        this.setState({studentsArray: body})
        debugger;
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){

    return(
      <div> hello from index </div>
    )
  }
}

export default IndexPage
