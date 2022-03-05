import React from "react";

const Habit = (props) => {
  return (
    <ul>
      <li className="habit">{props.habit.name}</li>
      <li className="habit-count">{props.habit.count}</li>
    </ul>
  );
};

export default Habit;
