import React, { Component } from 'react';
import '../css/Header.css'
import {Link} from 'react-router-dom';
class Header extends Component{
  render(){
    return(
      <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={'/'}>Upstander</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/'}>Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={'/Login'}>Login</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={'/About'}>About</Link>
                </li>
            </ul>
          </div>
      </div>
    </nav>

      </div>
    )
  }
}

export default Header;
