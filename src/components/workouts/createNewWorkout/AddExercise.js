import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const AddExercise = ({ addExcercise }) => {
  return (
    <Container>
      <AddButton onClick={addExcercise}>
        <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#2980B9" }} />
        <p>add</p>
      </AddButton>
    </Container>
  );
};

export default AddExercise;

const Container = styled.div`
  width: 100%;
`;
const AddButton = styled.div`
  width: 10%;
  padding: 5px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
  > p {
    padding: 2px;
    color: #2980b9;
    margin-left: 10px;
    display: inline-block;
  }
`;
