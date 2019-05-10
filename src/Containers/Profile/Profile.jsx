// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import LogoutButton from '../../Components/Master/LogoutButton';
// Stylsheets
import '../../stylesheets/user-profile.scss';

const Profile = props => {
  const { currentUser } = props;
  // check for the user's posts
  const getUserPosts = posts => {
    return posts.filter(post => post.user.id === props.currentUser.id);
  };

  // map over user posts and create HTML elements to display
  if (props.currentUser && props.posts) {
    let userPosts = getUserPosts(props.posts).map(post => {
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
        <LogoutButton />
        <img
          className="user-profile-image"
          src={currentUser.profile_img}
          alt={currentUser.username}
        />
        <h1>{currentUser.username}</h1>
        <p>{currentUser.bio}</p>
        <div className="profile-posts">
          {userPosts.length === 0 ? (
            <h2> You have no posts</h2>
          ) : (
            <React.Fragment>
              <h2>
                {currentUser.username}
                's Posts
              </h2>
              {userPosts}
            </React.Fragment>
          )}
        </div>
      </main>
    );
  }
  return null;
};

// Redux functions
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Profile);
