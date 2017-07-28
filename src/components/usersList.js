import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import {fetchUsers} from '../actions/index';

class UserList extends Component{
  componentWillMount(){
    this.props.fetchUsers();
  };

  renderList(){
    return (
      this.props.users.map((user) => {
        return (
          <div className="card card-block" key={v4()}>
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">{user.company.name}</p>
            <a className="btn btn-primary">Email</a>
          </div>
        );
      })
    );
  };

  render(){
    const {users} = this.props;
    if(users.length === 0){
      return <div>Loading...</div>
    };

    return (
      <div className="card-list">
          {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return ({
    users: state.users
  })
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchUsers
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
