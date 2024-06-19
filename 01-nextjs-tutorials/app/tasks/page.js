import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

function Tasks() {
  return <div className="max-w-lg">
    <TaskForm />
    <TaskList />
  </div>;
}
export default Tasks;
