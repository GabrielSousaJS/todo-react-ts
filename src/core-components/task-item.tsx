import ButtonIcon from '../components/button-icon';
import Card from '../components/card';
import InputCheckbox from '../components/input-checkbox';
import Text from '../components/text';
import TrashIcon from '../assets/icons/transh.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import React, { useState } from 'react';
import InputText from '../components/input-text';
import { TaskState, type Task } from '../models/task';
import { cx } from 'class-variance-authority';
import useTasks from '../hooks/use-tasks';
import Skeleton from '../components/skeleton';

type TaskItemProps = {
  task: Task;
  loading?: boolean;
};

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = useState(task.title || '');

  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask
  } = useTasks();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '');
  }

  async function handleSaveTask(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleClickDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx('flex-1', { 'line-through': task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleClickDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon
              type="submit"
              icon={CheckIcon}
              variant="tertiary"
              handling={isUpdatingTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
