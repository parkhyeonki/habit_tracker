import "./app.css";
import Habit from "./components/habit";

function App() {
  const habit = [{ id: 1, name: "Reading", count: 0 }];
  return (
    <>
      <Habit habit={habit} />
    </>
  );
}

export default App;
