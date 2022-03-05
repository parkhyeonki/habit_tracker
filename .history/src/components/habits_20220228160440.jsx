import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };

  const handelDecrement = (habit) => {
    props.onDecrement(habit);
  };
  return (
    <>
      <ul>
        {props.habits.map((habit) => (
          <Habit habit={habit} onIncrement={handleIncrement} onDecrement={handelDecrement} />
        ))}
      </ul>
      <button className="habits-reset">Reset All</button>
    </>
  );
};

export default Habits;
