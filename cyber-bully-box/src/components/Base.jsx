import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import '../css/Base.css'
import Routes from '../config/Routes'

class Base extends Component{
  render(){
    return(
      <div>
        <Header />
          {Routes}
        <Footer />
      </div>
    )
  }
}

export default Base;
