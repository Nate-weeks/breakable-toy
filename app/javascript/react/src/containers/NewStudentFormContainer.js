import React, {Component} from 'react';

class NewStudentFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      age: 0,
      contactNumber: 999999999,
      errors: []
    }
  }
  render(){

    return(
      <div>
        <p>hello form</p>
      </div>
    )
  }
}

export default NewStudentFormContainer
