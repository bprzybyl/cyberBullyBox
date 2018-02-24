import React, {Component} from 'react';

class Register extends Component{
  render(){
    return(
      <div class="row">
  <div class="col-md-6">
    <div class="container">
      <p class="h2">New Student Registration:</p>
      <form>
        <div class="row">
          <div class="col-3">
            <p class="h5 text-right">Email:</p>
          </div>
          <div class="col-9 form-group">
            <input type="email" class="form-control" id="inputStudentEmail" aria-describedby="StudentEmail" placeholder="Enter Email">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
            <p class="h5 text-right">First Name:</p>
          </div>
          <div class="col-9">
            <input type="text" class="form-control" id="inputStudentFirstName" aria-describedby="StudentFirstName" placeholder="Enter First Name">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-3">
            <p class="h5 text-right">Last Name:</p>
          </div>
          <div class="col-md-9">
            <input type="text" class="form-control" id="inputStudentLastName" aria-describedby="StudentLastName" placeholder="Enter Last Name">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
            <p class="h5 text-right">School ID:</p>
          </div>
          <div class="col-9">
            <input type="text" class="form-control" id="inputStudentSchoolID" aria-describedby="StudentSchoolID" placeholder="Enter School ID">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
          </div>
          <div class="col-9">
            <button type="submit" class="btn-primary btn" id="submitStudentButton">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
  <div class="col-md-6">
    <div class="container">
      <p class="h2">New Parent Registration:</p>
      <form>
        <div class="row">
          <div class="col-3">
            <p class="h5 text-right">Email:</p>
          </div>
          <div class="col-9 form-group">
            <input type="email" class="form-control" id="inputParentEmail" aria-describedby="ParentEmail" placeholder="Enter Email">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
            <p class="h5 text-right">First Name:</p>
          </div>
          <div class="col-9">
            <input type="text" class="form-control" id="inputParentFirstName" aria-describedby="ParentFirstName" placeholder="Enter First Name">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-3">
            <p class="h5 text-right">Last Name:</p>
          </div>
          <div class="col-md-9">
            <input type="text" class="form-control" id="inputParentLastName" aria-describedby="ParentLastName" placeholder="Enter Last Name">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
            <p class="h5 text-right">Access Code:</p>
          </div>
          <div class="col-9">
            <input type="text" class="form-control" id="inputParentAccessCode" aria-describedby="ParentAccessCode" placeholder="Enter Access Code">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
            <p class="h5 text-right">Children:</p>
          </div>
          <div class="col-9">
            <input type="text" class="form-control" id="inputParentSchoolID" aria-describedby="ParentSchoolID" placeholder="Enter School ID">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-3">
          </div>
          <div class="col-9">
            <button type="submit" class="btn-primary btn" id="submitParentButton">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</div>

    )
  }
}

export default Register;
