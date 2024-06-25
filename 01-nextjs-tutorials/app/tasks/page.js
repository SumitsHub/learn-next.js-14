import TaskForm from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

function Tasks() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
export default Tasks;
