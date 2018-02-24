import React, {Component} from 'react';
import Feed from './Feed/Feed'
import '../css/AdminDashboard.css'

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
                <h4>You're on the Dashboard</h4>
                <h4><small>Here are some quick resources</small></h4>
                  <ul className='resource-list'>
                    <li><p>Quickly finds a Student's Legal Guardian</p>
                      <ul><li><a href="">Student-Guardian Directory</a></li></ul>
                    </li>

                    <li><p>Contact the School Safety Offical</p>
                      <ul><li><a href="">Safety Officer Contact Information</a></li></ul>
                    </li>

                    <li><p>Steps to take when trouble brewing</p>
                      <ul><li><a href="">Crisis Response Protocol</a></li></ul>
                    </li>

                    <li><p>Guide for using digital evidence to prevent altercations</p>
                      <ul><li><a href="">Violence Prevention Actions</a></li></ul>
                    </li>

                    <li><p>Resources explaining legislative expectations</p>
                      <ul><li><a href="">Legislative Requirements</a></li></ul>
                    </li>

                    <li><p>Digital Materials for Distribution to Parents</p>
                      <ul><li><a href="">Anti-Bullying Materials for Guardians</a></li></ul>
                    </li>
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
