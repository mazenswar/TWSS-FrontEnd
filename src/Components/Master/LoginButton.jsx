// Dependencies
import React from 'react';

import { Link } from 'react-router-dom';

const LoginButton = () => (
  <Link to="/login" id="auth-button">
    Login
  </Link>
);

export default LoginButton;

// const handleLogout = () => {
//   // dispatch action to clear current user in state
//   // localStorage.clear()
// };
