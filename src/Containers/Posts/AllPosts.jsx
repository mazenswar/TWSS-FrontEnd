// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Stylesheets
import '../../stylesheets/all-posts.scss';

class AllPosts extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });
  sortPosts = posts => {
    return posts.sort((a, b) => b.id - a.id);
  };

  postList() {
    const { searchTerm } = this.state;
    const { posts } = this.props;

    if (searchTerm === '' && posts.length > 0) {
      let sortedPosts = this.sortPosts(posts);
      return sortedPosts.map(post => {
        let date = new Date(post.created_at);
        return (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className="all-posts-links"
          >
            <h4>{post.title}</h4>
            <div className="poster-info-div">
              <img src={post.user.profile_img} alt={post.user.username} />
              <h5>By {post.user.username}</h5>
            </div>
            <p>Posted on: {date.toString()}</p>
          </Link>
        );
      });
    } else if (posts.length > 0) {
      let filteredArr = [];
      let sortedPosts = this.sortPosts(posts);
      sortedPosts.forEach(post => {
        // debugger
        if (
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.user.username.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          let date = new Date(post.created_at);
          filteredArr.push(
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="all-posts-links"
            >
              <h4>{post.title}</h4>
              <div className="poster-info-div">
                <img src={post.user.profile_img} alt={post.user.username} />
                <h5>By {post.user.username}</h5>
              </div>
              <p>Posted on: {date.toString()}</p>
            </Link>
          );
        }
      });
      return filteredArr;
    }
  }

  render() {
    const { searchTerm } = this.state;
    const { posts } = this.props;

    if (posts.length > 0) {
      return (
        <React.Fragment>
          <div className="search-container">
            <h1>Search Posts</h1>
            <input
              className="search-input"
              type="text"
              name="search"
              value={searchTerm}
              onChange={this.handleChange}
            />
          </div>
          <div className="all-posts-container">
            <h1>Posts</h1>
            {this.postList()}
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AllPosts);
