import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {actions} from "../../store/actions/firebaseActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import WorkoutSummary from "./WorkoutSummary";

const WorkoutList = ({match, workouts, toggleStar, user, deleteWorkout}) => {
  const workoutList =
    workouts && workouts.length ? (
      workouts.map(workout => {
        return (
          <WorkoutSummary
            key={workout.id}
            workout={workout}
            user={user}
            deleteWorkout={deleteWorkout}
            toggleStar={toggleStar}
          />
        );
      })
    ) : (
      <Message>
        <FontAwesomeIcon
          icon={faDumbbell}
          style={{
            color: "#a4d3f2",
            fontSize: "5em",
            opacity: 0.3
          }}
        />
        <p>No workouts created</p>
      </Message>
    );
  return (
    <Content>
      <CardContainer>
        <Header>Recent workouts</Header>
        {workoutList}
      </CardContainer>
    </Content>
  );
};

const mapStateToProps = state => {
  return {
    user: state.firebaseAuth.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWorkout(id) {
      dispatch(actions.deleteWorkout(id));
    },
    toggleStar(id) {
      dispatch(actions.toggleStar(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList);

const Content = styled.div`
  width: 100%;
  heigh: auto;
  padding: 10px;
`;
const Header = styled.h2`
  width: 80%;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  min-height: 50vh;
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
