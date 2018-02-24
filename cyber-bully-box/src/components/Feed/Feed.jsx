import React, {Component} from 'react';
import firebase from './Database-Config/firebase.js';
class Feed extends Component{
  constructor() {
    super();
    this.state = {
      post: '',
      username: '',
      posts: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const postsRef = firebase.database().ref('posts');
    const post = {
      title: this.state.post,
      user: this.state.username
    }
    postsRef.push(post);
    this.setState({
      post: '',
      username: ''
    });
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
          user: posts[post].user
        });
      }
      this.setState({
        posts: newState
      });
    });
  }
  removeItem(postId) {
    const postRef = firebase.database().ref(`/posts/${postId}`);
    postRef.remove();
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Fun Food Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-post'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="post" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.post} />
                  <button>Add Item</button>
                </form>
          </section>
          <section className='display-post'>
              <div className="wrapper">
                <ul>
                  {this.state.posts.map((post) => {
                    return (
                      <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>brought by: {post.user}
                          <button onClick={() => this.removeItem(post.id)}>Remove Item</button>
                        </p>
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
