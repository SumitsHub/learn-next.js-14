"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const createTask = async formData => {
  const content = formData.get("content");
  console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath("/tasks");
};

//* NOTE: is receives prevState from useFormState() hook
export const createTaskCustom = async (prevState, formData) => {
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  const content = formData.get("content");
  console.log(content);

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/tasks");

    return { message: "Success!" };
  } catch (error) {
    console.log(error);
    return { message: "Error!" };
  }
};

export const deleteTask = async formData => {
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });

  revalidatePath("/tasks");
};

export const getSingleTask = async id => {
  return prisma.task.findUnique({ where: { id } });
};

export const editTask = async formData => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === "on" ? true : false },
  });

  redirect("/tasks");
};
