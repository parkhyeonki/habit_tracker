import { useState } from "react";
import "./app.css";
import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits.jsx";
import Navbar from "./components/navbar";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ]);

  const [count, setCount] = useState(1);

  const handleIncrement = (habit) => {
    setCount(count + 1);
    let newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: count };
      }
      return item;
    });
    console.log(newHabits);
    console.log(count);
    console.log(habit);
    setHabits(newHabits);
  };

  return (
    <>
      <Navbar />
      <HabitAddForm />
      <Habits habits={habits} onIncrement={handleIncrement} />
    </>
  );
}

export default App;
