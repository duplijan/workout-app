import React from "react";
import styled from "styled-components";
import background from "../../assets/images/background.svg";
import { StyledLink } from "../layout/Navbar";

const WelcomePage = () => {
  return (
    <Container>
      <Header>WELCOME TO myWORKOUT</Header>
      <SubHeader>create your workout plan and get in shape</SubHeader>
      <Footer />
      <Account>
        <AccountLink to="/signin">Sign in</AccountLink>
        <p> or </p>
        <AccountLink to="/signup">create a new account</AccountLink>
        <p> to start</p>
      </Account>
    </Container>
  );
};

export default WelcomePage;

const Container = styled.div`
  width: 80%;
  min-height: 100%;
  margin: 20px auto;
  padding: 20px;
  background: #fafafa;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3.5em;
  color: #2980b9;
  margin: 20px 0;
`;
const SubHeader = styled.h3`
  font-size: 1.5em;
  color: #bababa;
  font-weight: 200;
`;
const Account = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  > p {
    display: inline-block
    padding: 10px 0;
    font-size: 1em;
    color: #49aaea;
    font-weight: 200;
  }
`;
const AccountLink = styled(StyledLink)`
  color: #2980b9;
  font-size: 1.2em;
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: -120px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: fill;
`;
