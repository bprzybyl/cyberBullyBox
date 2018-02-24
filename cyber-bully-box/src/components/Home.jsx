import React, {Component} from 'react';
import '../css/Home.css'
import CoverImage from '../imgs/cover.png'
import CoverImage2 from '../imgs/cover2.png'
import CoverImage3 from '../imgs/cover3.png'
import {Link} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className='Home container'>
        <div className="row">

  <div className="col-md-8">
    <img className="img-fluid" src={CoverImage} alt="Cover" />
  </div>

  <div className="col-md-4">
    <h1 className="my-3">Welcome to Upstandr</h1>
    <p>A community dedicated to helping students and parents prevent verbal, cyber, and physical bullying.
      If you witness someone being bullied, do not join in on the bullying, offer
      support and stand up for the person being bullied, and encourage him/her to seek
      help and support. If you are a victim of bullying, ask for help. Please see below for
      additional resources and to learn how to prevent bullying.
    </p>
    <h3 className="my-3">Important Resources</h3>
    <ul className="resource-list">
      <li><a href='https://suicidepreventionlifeline.org/'>Suicide Prevention Lifeline</a></li>
      <li><a href='https://www.mentalhelp.net/articles/depression-hotline/'>Depression Hotline Number</a></li>
      <li><a href='https://teenlineonline.org/youth-yellow-pages/bullying-2/?gclid=CjwKCAiAlL_UBRBoEiwAXKgW51P-A7kjltboqYcZHfIwfSaarG_AqB2XV3HLLDEY7Ng6GeajY0PU4xoCSpAQAvD_BwE'>Teenlineonline</a></li>
    </ul>
    </div>

    </div>
  <h3 className="my-4">Be a part of our community, <a href='/login'>Join Here!</a></h3>

    <div className="row">

  <div className="col-md-6 col-sm-6 mb-4">
    <a href="#">
      <img className="img-fluid" src={CoverImage2} alt="cover2"/>
    </a>
  </div>

  <div className="col-md-6 col-sm-6 mb-4">
    <a href="#">
      <img className="img-fluid" src={CoverImage3} alt="cover3"/>
    </a>
  </div>


</div>
    </div>
    )
  }

}
export default Home;
