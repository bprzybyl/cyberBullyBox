import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import '../css/Base.css'
class Base extends Component{
  render(){
    return(
      <div>
        <Header />
        <div>
          <h1 id='hello'>Hello World</h1>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Base;
