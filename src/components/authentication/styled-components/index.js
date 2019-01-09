import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Form = styled.form`
  width: 60%;
  margin: 50px auto;
  padding: 20px;
  background: #85c1e9;
  background: #fafafa;
  border: 3px solid #2980b9;
`;
export const Header = styled.h2`
  padding: 10px 0;
`;
export const InputField = styled.div`
  padding: 5px 0;
`;
export const Label = styled.label`
  padding: 3px 0;
  display: block;
  color: #273746;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.2);
  transition: all 0.2s;
  &::placeholder {
    font-size: 0.5;
    opacity: 0.5;
  }
  &:focus {
    border: none;
    box-shadow: 0 3px 10px rgb(0, 0, 0, 0.1);
  }
  &:hover {
    background: #f6f6f6;
  }
`;
export const Options = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 30%;
  padding: 10px 15px;
  margin: 20px 0;
  background: #2980b9;
  font-weight: 500;
  border: none;
  box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  color: #fff;
  transition: opacity 0.3s;
  &:hover {
    color: #2980b9;
    background: #fff;
  }
`;
export const Error = styled.p`
  font-size: 0.8em;
  color: red;
`;
