// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// functions
import { createNewUsertoAPI } from '../../Adapters/HomeAdapter';
// Stylsheets
import '../../stylesheets/forms.scss';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    bio: '',
    profile_img: ''
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  handleSubmit = (event, userObj) => {
    const { history, handleNewUser } = this.props;
    event.preventDefault();
    handleNewUser(userObj);
    history.push('/');
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={event => this.handleSubmit(event, this.state)}>
          <h1>Create a New Account</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="profile_img"
            placeholder="Image URL"
            onChange={this.handleChange}
          />
          <textarea name="bio" placeholder="Bio" onChange={this.handleChange} />
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleNewUser: userObj => dispatch(createNewUsertoAPI(userObj))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignupForm)
);
