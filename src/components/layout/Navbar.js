import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";

import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

//<SignedOutLink />
const Navbar = ({auth, profile}) => {
  //user id from firebase
  const {uid} = auth;
  return (
    <Container>
      <Center>
        <Logo>
          <StyledLink to="/">myWorkout</StyledLink>
        </Logo>
        <AuthLinks>
          {uid ? <SignedInLink profile={profile} /> : <SignedOutLink />}
        </AuthLinks>
      </Center>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebaseAuth.auth,
    profile: state.firebaseAuth.profile
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Container = styled.div`
  width: 100%;
  background: #2980b9;
  padding: 20px;
  position: relative;
`;
const Center = styled.div`
  width: 80%;
  heigh: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  flex: 1;
  text-align: left;
  font-size: 3em;
`;

const AuthLinks = styled.div`
  flex: 1;
`;
