import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Base from '../components/Base';
import Header from '../components/Base';
import Login from '../components/Login';

export default(
  <Switch>
    <Route exact path='/' component={Base} />
    <Route exact path='/login' component={Login} />
  </Switch>
)
