import React, {Component} from 'react';
import Feed from './Feed/Feed'

class AdminDashboard extends Component{
  render(){
    return(
      <div className="admin-dashboard">
        <div className="container">


          <h1 className="my-4">Daily Feed
            <small> Here are what Students are reporting today...</small>
          </h1>


          <div className="row">
              <div className="col-md-5">
                <h1>Hello Robert</h1>
                <h4>Your on the Dashboard</h4>
                <h4><small> Here you can see what students are saying about their experience today</small></h4>
                <ul>
                  <li><a href="">Student Parents Directory</a></li>
                </ul>
            </div>
            <div className="col-md-7">
              <Feed />
           </div>
          </div>

      </div>
    </div>
    )
  }
}

export default AdminDashboard;
