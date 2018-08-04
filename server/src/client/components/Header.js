import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <header>
      <Link to="/">FB </Link>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admin</Link>
      {authButton}
    </header>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Header);
