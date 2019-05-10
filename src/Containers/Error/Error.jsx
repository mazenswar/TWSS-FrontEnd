import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1>Sorry, This Page Could Not Be Found</h1>
      <Link to="/" className="error-redirect">
        Home
      </Link>
    </div>
  );
};

export default Error;
