import EditForm from "@/components/EditForm";
import { getSingleTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const { taskId } = params;
  console.log({ taskId });
  const task = await getSingleTask(taskId);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};
export default SingleTaskPage;
