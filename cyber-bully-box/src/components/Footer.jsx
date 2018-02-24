import React, { Component } from 'react';
import '../css/Footer.css'

class Footer extends Component{
  render(){
    return(
      <div className='footer'>
        <footer className="footer py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Upstandr 2018</p>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
