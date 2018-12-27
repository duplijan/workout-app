import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import {
  Container,
  Form,
  Header,
  InputField,
  Label,
  Input,
  Button,
  Error
} from "./styled-components";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { loginError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header>Sign In</Header>
          <InputField>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="email"
            />
          </InputField>
          <InputField>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
            />
          </InputField>
          <Button type="submit">SIGN IN</Button>
          {loginError ? <Error>{loginError}</Error> : null}
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.auth.authError,
    auth: state.firebaseAuth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //credentials {email, password}
    signIn(credentials) {
      dispatch(actions.signIn(credentials));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
