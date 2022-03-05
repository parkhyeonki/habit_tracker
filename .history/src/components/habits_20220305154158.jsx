import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  };

  const handleDelete = (habit) => {
    props.onDelete(habit);
  };

  const handleReset = (habit) => {
    props.onReset(habit);
  };
  return (
    <>
      <ul>
        {props.habits.map((habit) => (
          <Habit habit={habit} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onReset={handleReset} />
        ))}
      </ul>
      <button className="habits-reset">Reset All</button>
    </>
  );
};

export default Habits;
