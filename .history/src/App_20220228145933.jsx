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

  const [count, setCount] = useState(0);
  const [nextId, setNextId] = useState(4);

  const handleIncrement = (habit) => {
    setCount((count) => count + 1);
    const habits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits({ habits });
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
