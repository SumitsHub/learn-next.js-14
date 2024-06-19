"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

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
