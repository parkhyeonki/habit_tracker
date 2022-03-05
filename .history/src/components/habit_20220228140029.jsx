import React from "react";

const Habit = (props) => {
  return (
    <>
      <li className="habit">{props.habit.name}</li>
    </>
  );
};

export default Habit;
