import React, { Component } from "react";
import styled from "styled-components";
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
  Button
} from "./styled-components";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header>Sign Up</Header>
          <InputField>
            <Label htmlFor="firstName">first name</Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="John"
            />
          </InputField>
          <InputField>
            <Label htmlFor="lastName">last name</Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Surname"
            />
          </InputField>
          <InputField>
            <Label htmlFor="email">email</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="user@email.com"
            />
          </InputField>
          <InputField>
            <Label htmlFor="password">password</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="******"
            />
          </InputField>
          <Button type="submit">SIGN UP</Button>
          <Error>{authError ? <p>{authError}</p> : null}</Error>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebaseAuth.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp(newUser) {
      dispatch(actions.signUp(newUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

const Error = styled.p`
  font-size: 0.8em;
  color: red;
`;
