import { useCallback, useState } from "react";
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

  const [nextid, setNextId] = useState(4);

  const handleIncrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  });

  const handleDelete = useCallback((habit) => {
    const filterHabit = habits.filter((item) => item.id !== habit.id);
    setHabits(filterHabit);
  });

  const handleReset = () => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <>
      <Navbar habitCount={habits.filter((item) => item.count >= 1).length} />
      <HabitAddForm onAddForm={handleAddForm} />
      <Habits habits={habits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onReset={handleReset} />
    </>
  );
}

export default App;
