import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { AboutPage } from './Components/AboutPage/AboutPage';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </div>
  )
}

export default App;