import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  return props.habits.map((habit) => <Habit habit={habit} />);
};

export default Habits;
