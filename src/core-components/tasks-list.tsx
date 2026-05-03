import Button from '../components/button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './task-item';
import useTask from '../hooks/use-task';

export default function TasksList() {
  const { tasks, addPrepareTask } = useTask();

  console.log(tasks);

  function handleNewTask() {
    addPrepareTask();
  }

  return (
    <>
      <section>
        <Button className="w-full" icon={PlusIcon} onClick={handleNewTask}>
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
