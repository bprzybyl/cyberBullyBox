import React, {Component} from 'react';
import firebase from './Database-Config/firebase.js';
class Feed extends Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <section className='display-post'>
              <div className="wrapper">
                <ul>
                  {this.state.posts.map((post) => {
                    return (
                      <li key={post.id}>
                        <h3>{post.title}</h3>
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
