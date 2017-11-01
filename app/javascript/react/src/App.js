import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import IndexPage from './containers/IndexPage';

const App = props => {
  return(
    <div>
    <Route path="/schools/:id/classrooms/:id" component={IndexPage}/>
    </div>
  )
}

export default App
