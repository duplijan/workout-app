import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import moment from "moment";

import {
  Card,
  Header,
  Title,
  Info,
  Date,
  Icon,
  Author,
  StyledTitle,
  TypeIcon,
  TypeIconYoga,
  StarIcon
} from "../workouts/WorkoutSummary";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import yogaIcon from "../../assets/images/icon.png";
import {
  faHeartbeat,
  faDumbbell,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const Favourite = ({workouts}) => {
  const favourite =
    workouts && workouts.filter(workout => workout.favourite === true);
  console.log(favourite);
  return (
    <Container>
      <h2>Favourite workouts</h2>
      {favourite && favourite.length > 0 ? (
        favourite.map(workout => {
          return (
            <Card style={{background: "#fff"}} key={workout.id}>
              <Header>
                <Icon>
                  {workout.type === "cardio" ? (
                    <TypeIcon icon={faHeartbeat} style={{color: "#FF2048"}} />
                  ) : workout.type === "stretching" ? (
                    <TypeIconYoga src={yogaIcon} />
                  ) : workout.type === "strength & condition" ? (
                    <TypeIcon icon={faDumbbell} style={{color: "#323232"}} />
                  ) : null}
                </Icon>
                <Title>
                  <StyledTitle to={`workout/${workout.id}`}>
                    {workout.title}
                  </StyledTitle>
                </Title>
              </Header>
              <Info>
                <Author>
                  {workout.authorFirstName} {workout.authorLastName}
                </Author>
                <Date>
                  <em>{moment(workout.createdAt.toDate()).calendar()}</em>
                </Date>
                <StarIcon icon={faStar} style={{color: "orange"}} />
              </Info>
            </Card>
          );
        })
      ) : (
        <Message>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#a4d3f2",
              fontSize: "5em",
              opacity: 0.3
            }}
          />
          <p>No favourite workouts</p>
        </Message>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    workouts: state.firestore.ordered.workouts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: "workouts"}])
)(Favourite);

const Container = styled.div`
  width: 75%;
  height: auto;
  background: #fafafa;
  padding: 20px;
  margin: 20px auto;
`;

const Message = styled.div`
  margin: 50px auto;
  text-align: center;
  & > p {
    margin: 10px;
    font-size: 0.8em;
    color: #a4d3f2;
  }
`;
