import "./app.css";
import Habits from "./components/habits.jsx";

function App() {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ];

  return (
    <ul>
      <Habits habits={habits} />
    </ul>
  );
}

export default App;
