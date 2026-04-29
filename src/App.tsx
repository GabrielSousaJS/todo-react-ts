import Text from './components/text';
import TrashIcon from './assets/icons/transh.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import Icon from './components/icon';
import Button from './components/button';
import PlusIcon from './assets/icons/plus.svg?react';
import ButtonIcon from './components/button-icon';
import Badge from './components/badge';
import InputText from './components/input-text';
import InputCheckbox from './components/input-checkbox';
import Card from './components/card';
import Container from './components/container';
import Skeleton from './components/skeleton';

export default function App() {
  return (
    <Container>
      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
        <Badge loading></Badge>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} loading />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
      <div>
        <Icon svg={SpinnerIcon} animate />
      </div>
      <div>
        <Text variant="body-md-bold" className="text-pink-base">
          Olá Mundo!
        </Text>
      </div>
      <div>
        <InputText />
      </div>
      <div className="flex gap-1">
        <InputCheckbox />
        <InputCheckbox loading />
      </div>

      <div>
        <Card>Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="w-96 h-6" />
      </div>
    </Container>
  );
}
