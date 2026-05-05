import Button from '../components/button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './task-item';
import useTask from '../hooks/use-task';
import { TaskState } from '../models/task';

export default function TasksList() {
  const { tasks, addPrepareTask } = useTask();

  function handleNewTask() {
    addPrepareTask();
  }

  return (
    <>
      <section>
        <Button
          className="w-full"
          icon={PlusIcon}
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
