import React from "react";

const Habit = (props) => {
  return (
    <ul>
      <li className="habit">{props.habit.name}}</li>
    </ul>
  );
};

export default Habit;
