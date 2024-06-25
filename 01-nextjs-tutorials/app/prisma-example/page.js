import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: 'Wake up',
  //     completed: Math.random()*10 < 5 ? true : false
  //   }
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

async function PrismaExample() {
  const tasks = await prismaHandlers();
  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  return (
    <div>
      <h1 className="text-7xl">Prisma Examples</h1>
      {tasks.map(task => {
        return (
          <h2 className="text-xl py-2" key={task.id}>
            {task.content} {task.completed && "✔️"}
          </h2>
        );
      })}
    </div>
  );
}
export default PrismaExample;
