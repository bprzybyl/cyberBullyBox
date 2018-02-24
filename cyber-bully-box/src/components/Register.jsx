import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Student Registration</h1>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Pick a Username..." />
              </div>
              <div className="form-group">
                <label>School Name</label>
                <input type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Enter Your School Name..." />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" placeholder="Enter Your Email..." />
              </div>
              </form>
              <div className="form-group">
                <Link to={'/student-dashboard'}><button type="submit" className="btn btn-primary">Submit</button></Link>
              </div>

          </div>
          <div className="col-md-6">
            <h1>Admin Registration</h1>
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Pick a Username..." />
                </div>
                <div className="form-group">
                  <label>School Name</label>
                  <input type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Enter Your School Name..." />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Email</label>
                  <input type="email" className="form-control" placeholder="Enter Your Email..." />
                </div>
                </form>
              <div className="form-group">
                <Link to={'/admin-dashboard'}><button type="submit" className="btn btn-primary">Submit</button></Link>
              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Register;
