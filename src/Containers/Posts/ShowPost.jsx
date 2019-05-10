/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// React share (social media buttons)
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon
} from 'react-share';

// Icon
// import heartIcon from '../../Assets/heart-icon.png';

// Functions
import { deletePostFromAPI, newLiketoAPI } from '../../Adapters/HomeAdapter';

// Stylsheets
import '../../stylesheets/show-post.scss';

class ShowPost extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  getPost = id => {
    if (this.props.posts.length > 0) {
      let int = parseInt(id);
      let ret = this.props.posts.find(post => post.id === int);
      return ret;
    }
  };

  handleLike = (postID, userID) => {
    const post = this.getPost();
    const { currentUser } = this.props;
    if (post && !post.likes.some(like => like.user === currentUser)) {
      newLiketoAPI(postID, userID);
    }
  };

  handleDeletePost = (event, postId) => {
    event.preventDefault();
    const { history, deletePost } = this.props;
    history.push('/');
    deletePost(postId);
  };

  conditionalButton = post => {
    const { currentUser } = this.props;
    if (currentUser && post !== undefined && post.user.id === currentUser.id) {
      return (
        <div
          className="delete-post-button"
          onClick={event => this.handleDeletePost(event, post.id)}
        >
          Delete Post
        </div>
      );
    } else if (post !== undefined) {
      return (
        // <div
        //   className="heart-icon"
        //   onClick={() => this.handleLike(post.id, currentUser.id)}
        // >
        //   <img src={heartIcon} alt="heart-icon" />
        // </div>
        null
      );
    }
  };

  render() {
    const { match } = this.props;
    const post = this.getPost(match.params.id);
    if (post) {
      let date = new Date(post.created_at);
      return (
        <div className="show-post-container">
          <h1 className="show-post-title">{post.title}</h1>
          <h2>
            By <Link to={`/users/${post.user.id}`}>{post.user.username} </Link>
          </h2>

          <div
            className="show-post-content"
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
          <p className="date-p">Posted on:{date.toString()}</p>
          <div className="date-sm-div">
            {this.conditionalButton(post)}
            {match.url ? (
              <React.Fragment>
                <TwitterShareButton
                  url="http://localhost.com"
                  title={post.title}
                  via="TWSS"
                >
                  <TwitterIcon size={100} round />
                </TwitterShareButton>

                <FacebookShareButton
                  url="http://localhost.com"
                  quote={post.title}
                >
                  <FacebookIcon round size={100} />
                </FacebookShareButton>

                <RedditShareButton url="http://localhost.com">
                  <RedditIcon round size={100} />
                </RedditShareButton>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// Redux Functions

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePostFromAPI(postId)),
  handleLike: (postId, userID) => dispatch(newLiketoAPI(postId, userID))
});

const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPost)
);
