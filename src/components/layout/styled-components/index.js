import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
`;

export const MenuItem = styled.li`
  margin: 0 10px;
  display: inline-block;
  padding: 8px 15px;
  font-size: 1.2em;
  border: 2px solid #f8f9f9;
  transition: all 0.2s;
  &:hover {
    background: #85c1e9;
  }
`;
export const User = styled.li`
  margin: 0 15px;
  display: inline-block;
  padding: 10px;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9s;
  }
`;
