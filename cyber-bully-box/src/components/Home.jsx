import React, {Component} from 'react';
import '../css/Home.css'
import CoverImage from '../imgs/cover.png'

class Home extends Component{
  render(){
    return(
      <div className='Home container'>
        <div className="row">

  <div className="col-md-8">
    <img className="img-fluid" src={CoverImage} alt="Cover Photo" />
  </div>

  <div className="col-md-4">
    <h1 className="my-3">Welcome to Upstandr</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
    <h3 className="my-3">Resources</h3>
    <ul>
      <li>Lorem Ipsum</li>
      <li>Dolor Sit Amet</li>
      <li>Consectetur</li>
      <li>Adipiscing Elit</li>
    </ul>
  </div>

</div>
      </div>
    )
  }

}
export default Home;
