import React, { Fragment } from "react";
import { StyledLink } from "./Navbar";
import { Menu, MenuItem } from "./styled-components";

const SignedUpLink = () => {
  return (
    <Fragment>
      <Menu>
        <MenuItem>
          <StyledLink to="/signin">login </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/signup">sign up </StyledLink>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default SignedUpLink;
