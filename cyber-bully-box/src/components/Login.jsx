import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="h1">New User?</p>
            <a href="http://www.google.com"><p class="h2">Register Here!</p></a>
          </div>
          <div class="col">
            <form>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="checkbox" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
