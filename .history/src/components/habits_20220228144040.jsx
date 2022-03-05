import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };
  return (
    <>
      <ul>
        {props.habits.map((habit) => (
          <Habit habit={habit} onIncrement={handleIncrement} />
        ))}
      </ul>
      <button className="habits-reset">Reset All</button>
    </>
  );
};

export default Habits;
