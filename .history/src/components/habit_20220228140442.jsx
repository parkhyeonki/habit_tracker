import React from "react";

const Habit = (props) => {
  return (
    <>
      <span className="habit">{props.habit.name}</span>
      <span className="habit-count">{props.habit.count}</span>
      <button className="habit-button">
        <i class="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button">
        <i class="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </>
  );
};

export default Habit;
