import db from "@/utils/db";

export const GET = async request => {
  const tasks = await db.task.findMany();
  return Response.json(tasks);
};

export const POST = async request => {
  //   console.log(await request.json()); // { content: 'Task #01' }
  const body = await request.json();
  const task = await db.task.create({
    data: {
      content: body.content,
    },
  });
  return Response.json({ data: task });
};
