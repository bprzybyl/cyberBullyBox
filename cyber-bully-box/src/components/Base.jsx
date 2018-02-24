import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
class Base extends Component{
  render(){
    return(
      <div>
        <Header />
        <div>Hello from the Base component</div>
        <Footer />
      </div>
    )
  }
}

export default Base;
