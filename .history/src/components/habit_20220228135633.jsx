import React from "react";

const Habit = (props) => {
  return (
    <ul>
      <li className="habit">{props.Habit.name}}</li>
    </ul>
  );
};

export default Habit;
