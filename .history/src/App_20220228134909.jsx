import "./app.css";
import Habit from "./components/habit";

function App() {
  const habit = [{ name: Reading, count: 0 }];
  return (
    <>
      <Habit habit={habit} />
    </>
  );
}

export default App;
