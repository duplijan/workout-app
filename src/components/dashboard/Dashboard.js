import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";

//HOC to connect Dashboard component with database
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

import Notification from "./Notification";
import WorkoutList from "../workouts/WorkoutList";

class Dashboard extends Component {
  render() {
    const {workouts, auth, notifications} = this.props;
    if (!auth.uid) return <Redirect to="/welcome" />;
    return (
      <Container>
        <Grid>
          <GridItem>
            <WorkoutList workouts={workouts} />
          </GridItem>
          <GridItem>
            <Notification notifications={notifications} />
          </GridItem>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // get data from firestore reducer and firestore database ( state.firestore.ordered.collectionName)
    workouts: state.firestore.ordered.workouts,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebaseAuth.auth
  };
};

//use compose to combine multiple HOC together, connect to connect redux store and firestoreConnect to access data from firebase database
/*firestoreConnect
  - specify the name of the collection we want to access and get data from
  - array every collectio is and object
  firestoreConnect([
    {collection: 'workouts'}
  ])
 */
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: "workouts", orderBy: ["createdAt", "desc"]},
    {collection: "notifications", limit: 5, orderBy: ["time", "desc"]}
  ])
)(Dashboard);

const Container = styled.div`
  width: 100%;
  heigh: auto;
`;

const Grid = styled.div`
  width: 75%;
  background: #fafafa;
  padding: 20px;
  margin: 50px auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
`;

const GridItem = styled.div`
  margin-top: 10px;
`;
