import React from "react";

const HabitAddForm = (props) => {
  return (
    <form>
      <input type="text" className="add-input" placeholder="habit" />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
