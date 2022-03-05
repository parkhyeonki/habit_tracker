import React from "react";

const Habit = (props) => {
  return (
    <ul>
      <li className="habit">{props.habit.count}</li>
    </ul>
  );
};

export default Habit;
