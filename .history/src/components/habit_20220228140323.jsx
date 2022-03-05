import React from "react";

const Habit = (props) => {
  return (
    <>
      <span className="habit">{props.habit.name}</span>
      <span className="habit-count">{props.habit.count}</span>
      <button className="habit-button"></button>
      <button className="habit-button"></button>
    </>
  );
};

export default Habit;
