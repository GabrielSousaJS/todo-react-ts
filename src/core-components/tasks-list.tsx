import Button from '../components/button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './task-item';
import useTasks from '../hooks/use-tasks';
import { TaskState, type Task } from '../models/task';
import useTask from '../hooks/use-task';

export default function TasksList() {
  const { addPrepareTask } = useTasks();
  const { tasks, isLoadingTasks } = useTask();

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
          disabled={
            isLoadingTasks ||
            tasks.some((task) => task.state === TaskState.Creating)
          }
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
