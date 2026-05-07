import Badge from '../components/badge';
import Text from '../components/text';
import useTask from '../hooks/use-task';

export default function TaskSummary() {
  const { tasksCount, concludedTasksCount } = useTask();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold" className="text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold" className="text-gray-300">
          Concluídas
        </Text>
        <Badge variant="primary">
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
