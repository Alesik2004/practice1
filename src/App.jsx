import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const tasks = [
    "Сделать домашнее задание",
    "Изучить React",
    "Сделать практическую работу",
    "Подготовиться к сдаче проекта",
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
