import "./app.css";
import Habit from "./components/habit.jsx";

function App() {
  const habit = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ];
  return (
    <>
      <Habit habit={habit} />
    </>
  );
}

export default App;
