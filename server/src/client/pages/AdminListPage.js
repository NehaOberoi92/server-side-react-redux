import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmin } from '../actions';

class AdminPage extends Component {
  componentDidMount() {
    this.props.fetchAdmin();
  }
  renderAdminList() {
    return this.props.admin.map((admin, index) => {
      return <li key={index}>{admin.name}</li>;
    });
  }
  render() {
    return (
      <div className="admin">
        <h3>Admin page</h3>
        <ul>{this.renderAdminList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmin }
  )(AdminPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmin())
};
