// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Icons
import homeIcon from '../../Assets/Icons/home-icon.svg';
import newPostIcon from '../../Assets/Icons/new-post-icon.svg';
import postsIcon from '../../Assets/Icons/posts-icon.svg';
import searchIcon from '../../Assets/Icons/search-icon.svg';
import fistIcon from '../../Assets/Icons/fist-icon.svg';
// import aboutIcon from '../../Assets/Icons/about-icon.svg';
import messageIcon from '../../Assets/Icons/message-icon.svg';

// <img src={require('../../Assets/Logo.png')} alt="" />

const Navbar = props => {
  const userProfilePic = () => {
    if (props.currentUser) {
      return (
        <Link to="/profile">
          <img
            id="user-profile-icon"
            src={props.currentUser.profile_img}
            alt="user-icon"
          />
        </Link>
      );
    }
    return (
      <Link to="/login">
        <img
          id="user-profile-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="placeholder-user"
        />
      </Link>
    );
  };

  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/">
          <img src={homeIcon} className="navbar-icons" alt="home-icon" />
          Home
        </Link>
        <Link to="/women">
          <img src={fistIcon} className="navbar-icons" alt="fist-icon" />
          Women
        </Link>{' '}
        <Link to="/conversations">
          <img src={messageIcon} className="navbar-icons" alt="message-icon" />
          Messages
        </Link>
        <Link to="/posts">
          <img src={postsIcon} className="navbar-icons" alt="posts-icon" />
          Posts
        </Link>
        {props.currentUser ? (
          <Link to="/newPost">
            <img
              src={newPostIcon}
              className="navbar-icons"
              alt="new-post-icon"
            />{' '}
            New Post
          </Link>
        ) : null}
        <Link to="/search">
          <img src={searchIcon} className="navbar-icons" alt="search-icon" />
          Search
        </Link>
        {/* <Link to="/about/">
          <img src={aboutIcon} className="navbar-icons" alt="about-icon" />
          About
        </Link> */}
      </div>
      {userProfilePic()}
    </nav>
  );
};

// Redux functions
const mapStateToProps = state => state;

// export statement
export default connect(mapStateToProps)(Navbar);
