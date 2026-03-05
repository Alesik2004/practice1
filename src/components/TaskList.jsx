import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} title={task} />
      ))}
    </ul>
  );
}

export default TaskList;
