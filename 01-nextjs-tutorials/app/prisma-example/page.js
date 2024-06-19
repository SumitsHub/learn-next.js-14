import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'Wake up',
      completed: Math.random()*10 < 5 ? true : false
    }
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return allTasks;
}

async function PrismaExample() {
  const tasks = await prismaHandlers();

  return <div>
    <h1 className="text-7xl">Prisma Examples</h1>
    {tasks.map((task)=>{
      return <h2 className="text-xl py-2" key={task.id}>{task.content} {task.completed && "✔️"}</h2>
    })}
  </div>;
}
export default PrismaExample;
