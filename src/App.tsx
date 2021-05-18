import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import ScreensRoot from './screens/Root';
import { Action } from './constants/action';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.props.history.push('/login');
  }

  userHasAuthenticated = isAuthenticated => {
    this.props.updateAuthentication({
      isAuthenticated
    });
  }

  render() {
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <ScreensRoot childProps={{
          userHasAuthenticated: this.userHasAuthenticated,
          isAuthenticated: this.props.isAuthenticated
        }}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  updateAuthentication: data => dispatch({
    type: Action.AUTHENTICATED,
    payload: data
  })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
