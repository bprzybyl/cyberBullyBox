import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Base from '../components/Base';
import Header from '../components/Base';
import Login from '../components/Login';
import Home from '../components/Home'

export default(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
  </Switch>
)
