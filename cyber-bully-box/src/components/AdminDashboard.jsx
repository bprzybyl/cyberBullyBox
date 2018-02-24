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
                    <li><a href="">Student-Guardian Directory</a></li>
                    <p>Quickly finds a Student's Legal Guardian</p>
                    <li><a href="">Safety Officer Contact Information</a></li>
                    <p>Contact Info for School Safety Offical</p>
                    <li><a href="">Crisis Response Protocol</a></li>
                    <p>Steps to take when trouble brewing</p>
                    <li><a href="">Violence Prevention Actions</a></li>
                    <p>Guide for using digital evidence to prevent altercations</p>
                    <li><a href="">Legislative Requirements</a></li>
                    <p>Resources explaining legislative expectations</p>
                    <li><a href="">Anti-Bullying Materials for Guardians</a></li>
                    <p>Digital Materials for Distribution to Parents</p>
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
