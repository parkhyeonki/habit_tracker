import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  return (
    <>
      <ul>
        {props.habits.map((habit) => (
          <Habit habit={habit} onIncrement={props.onIncrement} />
        ))}
      </ul>
      <button className="habits-reset">Reset All</button>
    </>
  );
};

export default Habits;
