import React, {Component} from 'react';
import firebase from '../Database-Config/firebase.js';
import './Feed.css'
class Feed extends Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      posts: []
    }
  }

  componentDidMount() {
    const postsRef = firebase.database().ref('posts');
    postsRef.on('value', (snapshot) => {
      let posts = snapshot.val();
      let newState = [];
      for (let post in posts) {
        newState.push({
          id: post,
          title: posts[post].title,
          user: posts[post].user,
          time: posts[post].time
        });
      }
      this.setState({
        posts: newState
      });
    });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <section className='display-post'>
              <div className="wrapper">
                <ul className="feed-posts">
                     {this.state.posts.map((post) => {
                       return (
                         <li key={post.id}>
                           <h3>{post.title}</h3>
                           <p>{post.user} reported at <small>{post.time}</small></p>
                         </li>
                       )
                     })}
                   </ul>

              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Feed;
