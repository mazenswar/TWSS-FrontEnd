// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { logoutAction } from '../../Redux/actions';

const LogoutButton = props => (
  <Link to="/" onClick={props.handleLogout} id="auth-button">
    Logout
  </Link>
);

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    localStorage.clear();
    dispatch(logoutAction());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
