// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const { match } = this.props;
    let urlParam = match.params.id;
    fetch(`http://localhost:4000/users/${urlParam}`)
      .then(r => r.json())
      .then(userData => this.setState({ user: userData }));
  }

  getUserPosts = posts => {
    const { user } = this.state;
    return posts.filter(post => post.user.id === user.id);
  };

  render() {
    const { user } = this.state;
    const { posts } = this.props;
    // map over user posts and create HTML elements to display
    if (user && posts.length) {
      let userPosts = this.getUserPosts(posts).map(post => {
        let date = new Date(post.created_at);
        return (
          <Link key={post.id} to={`/posts/${post.id}`} className="posts-links">
            <h4>{post.title}</h4>
            <p>Posted on: {date.toString()}</p>
          </Link>
        );
      });

      return (
        <main id="profile-container">
          <img
            className="user-profile-image"
            src={user.profile_img}
            alt={user.username}
          />
          <h1>{user.username}</h1>
          <p>{user.bio}</p>
          <div className="profile-posts">
            {userPosts.length === 0 ? (
              <h2> This user does not have any posts yet</h2>
            ) : (
              <React.Fragment>
                <h2>
                  {user.username}
                  's Posts
                </h2>
                {userPosts}
              </React.Fragment>
            )}
          </div>
        </main>
      );
    } else {
      return null;
    }
  }
}

// Redux functions
const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserShow);
