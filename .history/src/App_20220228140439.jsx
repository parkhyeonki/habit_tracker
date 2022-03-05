import "./app.css";
import Habit from "./components/habit.jsx";

function App() {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ];
  return (
    <ul>
      <Habit habit={habits[0]} />
    </ul>
  );
}

export default App;
