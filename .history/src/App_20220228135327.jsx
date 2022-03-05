import "./app.css";
import Habit from "./components/habit.jsx";

function App() {
  const habit = [{ id: 1, name: "Reading", count: 0 }];
  return (
    <>
      <Habit habit={habit} />
    </>
  );
}

export default App;
