import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import IndexPage from './containers/IndexPage';
import NewStudentFormContainer from './containers/NewStudentFormContainer';

const App = props => {
  return(
    <div>
    <Route exact={true} path="/schools/:id/classrooms/:id" component={IndexPage}/>
    <Route path="/schools/:id/classrooms/:id/students/:id" component={NewStudentFormContainer}/>
    </div>
  )
}

export default App
