import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderUsers() {
    if (!this.props.users.length) return false;
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <h2>User lists</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

//Load data on server side
function loadData(store) {
  return store.dispatch(fetchUser());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUser }
  )(UserList)
};
