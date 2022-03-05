import React from "react";

const HabitAddForm = (props) => {
  const formRef = React.createRef;
  const inputRef = React.createRef;

  const onSubmit = (event) => {
    event.preventDefault();
    const habitName = inputRef.current.value;
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
