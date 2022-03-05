import React from "react";

const Habit = (props) => {
  return (
    <li className="habit">
      <span className="habit">{props.habit.name}</span>
      <span className="habit-count">{props.habit.count}</span>
      <button className="habit button habit-increase">
        <i class="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit button habit-decrease">
        <i class="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit button habit-delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
};

export default Habit;
