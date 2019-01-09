import React, {Fragment} from "react";
import styled from "styled-components";
import {Menu, MenuItem, User} from "./styled-components";
import {StyledLink} from "./Navbar";
import {connect} from "react-redux";
import {actions} from "../../store/actions/authActions";

const SignedInLink = ({logOut, profile}) => {
  return (
    <Fragment>
      <Menu>
        <MenuItem>
          <StyledLink to="/create">new workout </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/favourite">favourite </StyledLink>
        </MenuItem>
        <MenuItem>
          <Logout onClick={logOut}>logout </Logout>
        </MenuItem>
        <User>
          <StyledLink to="/"> {profile.userName} </StyledLink>
        </User>
      </Menu>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut() {
      dispatch(actions.signOut());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLink);

const Logout = styled.p`
  color: #fff;
  cursor: pointer;
`;
