import React from "react";
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Switch, Route }
from 'react-router-dom';
import {logout} from '../store/user'


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.logIn = this.logIn.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  componentDidMount () {
    const {user} = this.props
  }

  logout (e) {
    e.preventDefault();
    this.props.logout(this.props.user.id)
    window.location.hash='/login'
  }

  logIn (e) {
    e.preventDefault();
    window.location.hash='/login'
  }

  signUp (e) {
    e.preventDefault();
    window.location.hash='/signUp'
  }

  render() {
    const {user} = this.props
    if (user.firstName) {
      return (
        <div id="NavbarContainer">
          <div id="LinkContainer">
              <Link to="/">Home</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/profile">My Profile</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/chat">Chat</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/match">Find Your Match</Link>
          </div>
          <button className = "logOutButton" onClick={this.logout}>Log Out</button>
        </div>
      );
    }

    else {
      return (
        <div id="NavbarContainer">
          <div id="LinkContainer">
              <Link to="/">Home</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/profile">My Profile</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/chat">Chat</Link>
          </div>
          <div id="LinkContainer">
              <Link to="/match">Find Your Match</Link>
          </div>
          <div id="LinkContainer">
            <button className="signInNavButton" onClick={this.logIn}>Sign In </button>
          </div>
          <div id="LinkContainer">
            <button className = "signUpNavButton" onClick={this.signUp}>Sign Up</button>
          </div>
        </div>
      )
    }
  }
};

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatchToProps = (dispatch) => ({
      logout: (userId) => dispatch(logout(userId))
})

export default connect(mapState, mapDispatchToProps)(Navbar);
