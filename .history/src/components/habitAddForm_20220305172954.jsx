import React, { useRef } from "react";

const HabitAddForm = (props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const habitName = inputRef.current.value;
    habitName && props.onAdd(habitName);
    formRef.current.Reset();
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
