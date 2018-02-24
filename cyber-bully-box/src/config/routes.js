import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import About from '../components/About';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

export default(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/about' component={About} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/dashboard' component={Dashboard} />

  </Switch>
)
