import React from "react";

const Habit = (props) => {
  <>
    <span className="habit">{props.habit.name}</span>
    <span className="habit-count">{props.habit.count}</span>
  </>;
};

export default Habit;
