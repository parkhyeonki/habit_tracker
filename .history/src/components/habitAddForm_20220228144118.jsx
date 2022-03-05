import React from "react";

const HabitAddForm = (props) => {
  return (
    <form>
      <input type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
