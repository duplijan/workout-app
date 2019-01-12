import React from "react";
import styled, {keyframes} from "styled-components";
import moment from "moment";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import posed from "react-pose";

import yogaIcon from "../../assets/images/icon.png";
import {TypeIcon, TypeIconYoga, StarIcon} from "./WorkoutSummary";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faDumbbell,
  faStar,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

const PosedContainer = posed.div({
  enter: {staggerChildren: 50},
  exit: {staggerChildren: 20, staggerDirection: 1}
});

const PosedItem = posed.div({
  enter: {y: 0, opacity: 1},
  exit: {y: 50, opacity: 0}
});

const WorkoutDetail = props => {
  const {workout, auth} = props;
  // const {
  //   authorFirstName,
  //   authorLastName,
  //   title,
  //   type,
  //   note,
  //   exercises
  // } = workout;
  if (!auth.uid) return <Redirect to="/signIn" />;
  if (workout) {
    return (
      <Container key={workout.id}>
        <Title>{workout.title} </Title>
        {workout.favourite === true ? (
          <StarIcon icon={faStar} style={{color: "orange"}} />
        ) : (
          <StarIcon icon={faStar} style={{color: "#eee"}} />
        )}

        <Note>{workout.note}</Note>
        <Headline>exercises</Headline>
        <Wrapper>
          <PosedContainer>
            <List>
              {workout.exercises.map((exercise, index) => {
                return (
                  <PosedItem style={{styleList: "none"}}>
                    <Item key={index}>{exercise}</Item>
                  </PosedItem>
                );
              })}
            </List>
          </PosedContainer>

          <Type>
            {workout.type === "cardio" ? (
              <TypeIcon icon={faHeartbeat} style={{color: "#FF2048"}} />
            ) : workout.type === "stretching" ? (
              <TypeIconYoga src={yogaIcon} />
            ) : workout.type === "strength & condition" ? (
              <TypeIcon icon={faDumbbell} style={{color: "#323232"}} />
            ) : null}
            <p>{workout.type}</p>
          </Type>
        </Wrapper>
        <Author>
          created by: {workout.authorFirstName} {workout.authorLastName} <br />
          <em>{moment(workout.createdAt.toDate()).calendar()}</em>
        </Author>
      </Container>
    );
  } else {
    return (
      <Loading>
        <Loader
          icon={faSpinner}
          style={{
            fontSize: "5em",
            color: "#B5E0FD"
          }}
        />
      </Loading>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const workouts = state.firestore.data.workouts;
  const workout = workouts ? workouts[id] : null;
  return {
    auth: state.firebaseAuth.auth,
    workout: workout
  };
};

export default compose(
  firestoreConnect(["workouts"]),
  connect(mapStateToProps)
)(WorkoutDetail);

const Container = styled.div`
  width: 70%;
  height: auto;
  padding: 30px;
  margin: 50px auto;
  background: #fafafa;
  position: relative;
  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  text-align: center
  text-transform: uppercase;
  color: #2980b9;
  border-bottom: 2px solid #2980b9;
  padding: 10px 0;
`;
const Note = styled.p`
font-size: 1.2em;
  color: #656565;
  padding: 5px
  margin: 20px 0;

`;
const Headline = styled.h2`
  color: #49aaea;
  padding: 5px 0;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Type = styled.div`
  text-align: center;
  > p {
    font-size: 1.5em;
  }
`;
const List = styled.ul`
  width: 100%;
  margin-bottom: 20px;
`;
const Item = styled.li`
  list-style: none
  position: relative;
  font-size: 1em;
  padding: 5px;
  margin: 8px 0;
    background: #eaeaea;
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.1);
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;
const Author = styled.p`
  font-size: 0.8em;
  padding: 10px;
  color: #ccc;
`;
const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
;
  }
`;
export const Loader = styled(FontAwesomeIcon)`
  animation: ${rotate} 3s infinite alternate backwards;
`;
export const Loading = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: center;
`;
