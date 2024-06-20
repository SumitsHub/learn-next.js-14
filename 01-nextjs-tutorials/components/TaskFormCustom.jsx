"use client";
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus } from "react-dom";

// TODO: why we need to create separate component for using useFormStatus()
// is it because we are using server actions and useFormStatus is client side hook??
const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait" : "create task"}
    </button>
  );
};

function TaskForm() {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
}
export default TaskForm;
