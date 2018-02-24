import React, {Component} from 'react';
import '../css/Home.css'
import CoverImage from '../imgs/cover.png'

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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
    <h3 className="my-3">Important Resources</h3>
    <ul className="resource-list">
      <li><a href='https://suicidepreventionlifeline.org/'>Suicide Prevention Lifeline</a></li>
      <li><a href='https://www.mentalhelp.net/articles/depression-hotline/'>Depression Hotline Number</a></li>
      <li><a href='https://teenlineonline.org/youth-yellow-pages/bullying-2/?gclid=CjwKCAiAlL_UBRBoEiwAXKgW51P-A7kjltboqYcZHfIwfSaarG_AqB2XV3HLLDEY7Ng6GeajY0PU4xoCSpAQAvD_BwE'>Teenlineonline</a></li>
    </ul>
    </div>

    </div>
    </div>
    )
  }

}
export default Home;
