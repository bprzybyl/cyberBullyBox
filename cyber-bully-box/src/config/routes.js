import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import About from '../components/About';
import Register from '../components/Register';
import StudentDashboard from '../components/StudentDashboard';
import AdminDashboard from '../components/AdminDashboard';

export default(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/about' component={About} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/student-dashboard' component={StudentDashboard} />
    <Route exact path='/admin-dashboard' component={AdminDashboard} />
  </Switch>
)
