import React from "react";

const Habit = (props) => {
  return (
    <>
      <span className="habit">{props.habit.name}</span>
      <span className="habit">{props.habit.count}</span>
    </>
  );
};

export default Habit;
