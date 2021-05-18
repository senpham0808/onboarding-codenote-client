import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { Auth } from 'aws-amplify';
import LoaderButton from '../../components/LoaderButton';
import "./index.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
    };
  }

  validateForm() {
    const { email, password } = this.state;
    return email && password;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const { history, userHasAuthenticated } = this.props;
      await Auth.signIn({
        username: this.state.email,
        password: this.state.password
      });
      userHasAuthenticated(true);
      history.push('/');
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { email, password, isLoading } = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}

export default Login;
