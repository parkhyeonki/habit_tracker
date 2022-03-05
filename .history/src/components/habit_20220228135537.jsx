import React from "react";

const Habit = (props) => {
  return (
    <ul>
      <span className="habit">{props.habit.name}</span>
      <span className="habit-count">{props.habit.count}</span>
    </ul>
  );
};

export default Habit;
