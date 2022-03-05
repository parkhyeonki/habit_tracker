import "./app.css";
import Habits from "./components/habits.jsx";
import Navbar from "./components/navbar";

function App() {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ];

  return (
    <ul>
      <Navbar />
      <Habits habits={habits} />
    </ul>
  );
}

export default App;
