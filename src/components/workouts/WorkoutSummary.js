import React from "react";
import styled from "styled-components";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import yogaIcon from "../../assets/images/icon.png";
import {
  faPlus,
  faHeartbeat,
  faDumbbell,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {StyledLink} from "../layout/Navbar";

const WorkoutSummary = ({workout, deleteWorkout, toggleStar}) => {
  const {
    title,
    type,
    id,
    createdAt,
    authorFirstName,
    authorLastName,
    favourite
  } = workout;

  return (
    <Card>
      <Header>
        <DeleteButton onClick={id => deleteWorkout(workout.id)}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              color: "#ccc",
              transform: `rotate(45deg)`,
              fontSize: "1.2em"
            }}
          />
        </DeleteButton>
        <Icon>
          {type === "cardio" ? (
            <TypeIcon icon={faHeartbeat} style={{color: "#FF2048"}} />
          ) : type === "stretching" ? (
            <TypeIconYoga src={yogaIcon} />
          ) : type === "strength & condition" ? (
            <TypeIcon icon={faDumbbell} style={{color: "#323232"}} />
          ) : null}
        </Icon>
        <Title>
          <StyledTitle to={`workout/${id}`}>{title}</StyledTitle>
        </Title>
      </Header>
      <Info>
        <Author>{`${authorFirstName} ${authorLastName}`}</Author>
        <Date>
          <em>{moment(createdAt.toDate()).calendar()}</em>
        </Date>
        {favourite === true ? (
          <StarIcon
            icon={faStar}
            style={{color: "orange"}}
            onClick={id => toggleStar(workout.id)}
          />
        ) : (
          <StarIcon
            icon={faStar}
            style={{color: "#eee"}}
            onClick={id => toggleStar(workout.id)}
          />
        )}
      </Info>
    </Card>
  );
};

export default WorkoutSummary;

export const StyledTitle = styled(StyledLink)`
  font-size: 1.5em;
  transition: all 0.2s;
  color: #2980b9;
  &:hover {
    opacity: 0.8;
  }
`;
export const Card = styled.div`
  position: relative;
  width: 80%;
  margin: 20px auto;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px rgb(0, 0, 0, 0.6);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 6px -6px rgb(0, 0, 0, 0.3);
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 50%;
  padding: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  flex: 2;
  text-align: center;
`;
export const Icon = styled.div`
  flex: 1;
`;
export const Info = styled.div`
  width: 100%;
  background: #3295d3;
  position: relative;
`;
export const Date = styled.p`
  font-size: 0.6em;
  padding: 10px
  color: #fff;
`;
export const Author = styled.p`
  font-size: 1em;
  color: #fff;
  padding: 10px;
`;
export const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
export const TypeIcon = styled(FontAwesomeIcon)`
  font-size: 4em;
`;
export const TypeIconYoga = styled.img.attrs({
  src: ""
})`
  width: 64px;
  height: 64px;
`;
export const StarIcon = styled(FontAwesomeIcon)`
  color: #eee
  font-size: 2em;
  position: absolute;
  top: 10%;
  right:10px;

`;
