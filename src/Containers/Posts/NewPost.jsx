// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// Adapter functions
import { createPostToAPI } from '../../Adapters/HomeAdapter';
// Stylsheets
import '../../stylesheets/new-post.scss';

class NewPost extends React.Component {
  state = {
    title: '',
    content: ''
  };

  handleSubmit = (event, post) => {
    event.preventDefault();
    const { currentUser, handleNewPost, history } = this.props;
    handleNewPost(post, currentUser.id);
    history.push('/posts');
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handlePostChange = data => this.setState({ content: data });

  renderPage = () => {
    const { title, content } = this.state;
    const { history } = this.props;
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== 'undefined'
    ) {
      return (
        <React.Fragment>
          <h1 className="page-header">Create New Post</h1>
          <form
            className="new-post-form"
            onSubmit={event => this.handleSubmit(event, this.state)}
          >
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleTitleChange}
              placeholder="Title"
              required
            />
            <CKEditor
              editor={ClassicEditor}
              data=""
              value={content}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                // console.log( 'Editor is ready to use!', editor );
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.handlePostChange(data);
              }}
              onBlur={editor => {
                // console.log( 'Blur.', editor );
              }}
              onFocus={editor => {
                // console.log( 'Focus.', editor );
              }}
            />
            <input
              className="submit-button"
              type="submit"
              value="Create Post"
            />
          </form>
        </React.Fragment>
      );
    } else {
      history.push('/login');
      return null;
    }
  };

  render() {
    return this.renderPage();
  }
}

// Redux functions
const mapDispatchToProps = dispatch => ({
  handleNewPost: (postData, user_id) =>
    dispatch(createPostToAPI(postData, user_id))
});

const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewPost)
);
