import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  return (
    <ul>
      props.habits.map((habit) => <Habit habit={habit} />
      );
    </ul>
  );
};

export default Habits;
