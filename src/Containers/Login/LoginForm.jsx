// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// Adapter Functions
import { loginUsertoAPI } from '../../Adapters/HomeAdapter';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleSubmit = event => {
    const { handleLogin, history } = this.props;
    event.preventDefault();
    handleLogin(this.state);
    history.push('/');
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Please Login</h3>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleChange}
          value={username}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={password}
        />
        <input className="submit-button" type="submit" />
        <span>New User?</span>
        <Link to="/signup">Sign Up</Link>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: userData => dispatch(loginUsertoAPI(userData))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginForm)
);
