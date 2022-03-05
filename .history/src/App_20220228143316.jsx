import { useState } from "react";
import "./app.css";
import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits.jsx";
import Navbar from "./components/navbar";

function App() {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ];

  const [count, setCount] = useState(0);
  const [nextId, setNextId] = useState(4);

  return (
    <>
      <Navbar />
      <HabitAddForm />
      <Habits habits={habits} />
    </>
  );
}

export default App;
