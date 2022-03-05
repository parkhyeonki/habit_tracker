import React from "react";

const Habit = (props) => {
  return (
    <>
      <li className="habit">{props.habit.name}</li>
      <li className="habit">{props.habit.count}</li>
    </>
  );
};

export default Habit;
