import React from "react";

const Habit = (props) => {
  const handleIncrement = () => {
    props.onIncrement(props.habit);
  };
  const handleDecrement = () => {
    props.onDecrement(props.habit);
  };
  const handleDelete = () => {
    props.ondelete(props.habit);
  };
  return (
    <li className="habit">
      <span className="habit-name">{props.habit.name}</span>
      <span className="habit-count">{props.habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i class="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i class="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
};

export default Habit;
