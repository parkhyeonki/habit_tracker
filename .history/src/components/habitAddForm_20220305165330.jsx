import React from "react";

const HabitAddForm = (props) => {
  const formRef = React.createRef;
  const inputRef = React.createRef;

  const onSubmit = (habit) => {
    props.onAddForm(habit);
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
