import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Login extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h1">New User?</p>
            <Link to={'/register'}><p className="h2">Register Here!</p></Link>
          </div>
          <div className="col">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="checkbox" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
