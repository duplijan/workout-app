import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../authentication/styled-components";

const ExerciseInput = ({ exercises, onExerciseChange, deleteExercise }) => {
  return exercises.map((exercise, index) => {
    return (
      <Container key={index}>
        <Input
          onChange={e => onExerciseChange(e, index)}
          value={exercise}
          placeholder="exercise"
        />
        <Icon onClick={e => deleteExercise(e, index)}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              color: "red",
              transform: `rotate(45deg)`,
              fontSize: "1.5em"
            }}
          />
        </Icon>
      </Container>
    );
  });
};

export default ExerciseInput;

const Container = styled.div`
  width: 100%;
  padding: 5px 0;
  position: relative;
`;
const Icon = styled.span`
  position: absolute;
  top: 11px;
  right: 10px;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;
