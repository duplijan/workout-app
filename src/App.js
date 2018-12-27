import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutDetail from "./components/workouts/WorkoutDetail";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import CreateWorkout from "./components/workouts/createNewWorkout/CreateWorkout";
import WelcomePage from "./components/welcome/WelcomePage";

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    delay: 500,
    beforeChildren: true
  },
  exit: { y: 10, opacity: 0 }
});

const App = props => (
  <Route
    render={({ location }) => (
      <Fragment>
        <Navbar />
        <PoseGroup>
          <RoutesContainer key={location.pathname}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={props => <Dashboard {...props} key="dashboard" />}
              />
              <Route path="/welcome" component={WelcomePage} key="welcome" />
              <Route
                path="/workout/:id"
                component={WorkoutDetail}
                key="workout/:id"
              />
              <Route path="/create" component={CreateWorkout} key="welcome" />
              <Route path="/signin" component={SignIn} key="signin" />
              <Route path="/signup" component={SignUp} key="welcome" />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </Fragment>
    )}
  />
);

export default App;

//<Router>
//  </Router>
