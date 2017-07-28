import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authenticate } from '../actions/index';

class Header extends Component{
  constructor(props){
    super(props);
    this.authButton = this.authButton.bind(this);
  };

  authButton(){
    if(this.props.authenticated){
      return <button onClick={() => {this.props.authenticate(false)}} className="btn btn-primary">Log out</button>
    }
    return <button onClick={() => {this.props.authenticate(true)}} className="btn btn-primary">Log In</button>
  };

  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
          <Link to="/users">Users</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
};

function mapStateToProps(state){
  return ({
    authenticated: state.authenticated
  });
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    authenticate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
