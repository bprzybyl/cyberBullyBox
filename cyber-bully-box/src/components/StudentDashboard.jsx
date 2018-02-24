import React, {Component} from 'react';
class StudentDashboard extends Component{
  render(){
    return(
      <div className="student-dashboard">
      <div className="container">
        <div className="row">
          <div id='login-form' className="col">
            <p className="h1">Welcome John</p>
            <p className="h2">How are you feeling today?</p>
          </div>
          <div className="col">
            <form onChange={"/student-dashboard"}>
              <div className="form-group">
                <h3>How's Your Day?</h3>
                <textarea className="form-control" rows="4" cols="50" placeholder="Did you see something you need to talk about?">

                </textarea>
              </div>
                <div className="form-group">
                  <h3>Do you or anyone you know need help?</h3>
                  <textarea className="form-control" rows="4" cols="50" placeholder="Your identity will be kept private until you're ready to talk to someone">

                  </textarea>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
      <div className="quotes-box container">
        <div className="row">

          <div className="quotes-box col-md-6  mb-4">
            <h3>Message for the day</h3>
            </div>

            <div className="col-md-6  mb-4"></div>
          </div>
      </div>
    </div>
    )
  }
}
export default StudentDashboard;
