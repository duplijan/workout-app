import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {actions} from "../../../store/actions/firebaseActions";
import {Redirect} from "react-router-dom";
import ExerciseInput from "./ExerciseInput";
import AddExercise from "./AddExercise";
import {
  Container,
  Form,
  Header,
  InputField,
  Label,
  Input,
  Button,
  Options
} from "../../authentication/styled-components";

class CreateWorkout extends Component {
  state = {
    title: "",
    type: "",
    note: "",
    createAt: "",
    favourite: false,
    exercises: []
  };

  handleChange = (e, index) => {
    const {name, value, type, checked} = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };

  handleExerciseChange = (e, index) => {
    //create an copy of the current exercises
    let exercises = [...this.state.exercises];
    //update the exercisewit the current index
    exercises[index] = e.target.value;
    this.setState({
      exercises
    });
    console.log(this.state.exercises);
  };

  handleAddNewExerciseInput = e => {
    //create and concat a new execise in the array starting with "" value
    let exercises = this.state.exercises.concat([""]);
    this.setState({
      exercises
    });
  };

  handleDeleteExerciseInput = (e, index) => {
    let exercises = [
      ...this.state.exercises.slice(0, index),
      //remove only one element from the array with the index
      //without all elements would be removed no matter which one was clicked
      ...this.state.exercises.slice(index + 1)
    ];
    this.setState({
      exercises
    });
  };

  handleSubmit = e => {
    const workout = this.state;
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.type ||
      !this.state.note ||
      !this.state.exercises
    ) {
      return;
    }
    this.props.createWorkout(workout);
    this.setState({
      title: "",
      type: "",
      note: "",
      exercises: []
    });
    //redirect to dashboard page
    this.props.history.push("/");
  };

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header>Create a plan</Header>
          <InputField>
            <Label htmlFor="title">Title</Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="title"
              value={this.state.title}
              maxLength={15}
            />
            {!this.state.title && <Invalid>this field is required</Invalid>}
          </InputField>
          <InputField>
            <Label htmlFor="describtion">Note</Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="note"
              value={this.state.note}
            />
            {!this.state.note && <Invalid>this field is required</Invalid>}
          </InputField>
          <Options>
            <Label htmlFor="type">
              <RadioButton
                onChange={this.handleChange}
                type="radio"
                name="type"
                value="strength & condition"
                checked={this.state.type === "strength & condition"}
              />
              strength & condition
            </Label>
            <Label htmlFor="type">
              <RadioButton
                onChange={this.handleChange}
                type="radio"
                name="type"
                value="cardio"
                checked={this.state.type === "cardio"}
              />
              cardio
            </Label>
            <Label htmlFor="type">
              <RadioButton
                onChange={this.handleChange}
                type="radio"
                name="type"
                value="stretching"
                checked={this.state.type === "stretching"}
              />
              stretching
            </Label>
            {!this.state.type && <Invalid>select a type</Invalid>}
          </Options>
          <ExerciseInput
            exercises={this.state.exercises}
            onExerciseChange={this.handleExerciseChange}
            deleteExercise={this.handleDeleteExerciseInput}
          />
          <AddExercise addExcercise={this.handleAddNewExerciseInput} />
          <Button type="submit">CREATE PLAN</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workout.workouts,
    auth: state.firebaseAuth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkout(workout) {
      dispatch(actions.createWorkout(workout));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWorkout);

const RadioButton = styled(Input)`
  width: auto;
  margin: 0 10px;
  padding: 0;
  box-shadow: none;
`;
const Invalid = styled.i`
  font-size: 0.6em;
  position: relative;
  top: -5px;
`;
