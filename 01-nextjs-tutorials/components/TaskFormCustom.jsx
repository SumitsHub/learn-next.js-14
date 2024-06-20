"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

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

const initialFormState = { message: null };

function TaskForm() {
  const [state, formAction] = useFormState(createTaskCustom, initialFormState);

  useEffect(() => {
    if (state.message === "error") toast.error("Failed to create task!");
    if (state.message === "success") toast.success("Task created!");
  }, [state]);

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
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
