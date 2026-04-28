import Text from './components/text';
import TrashIcon from './assets/icons/transh.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import Icon from './components/icon';
import Button from './components/button';
import PlusIcon from './assets/icons/plus.svg?react';
import ButtonIcon from './components/button-icon';
import Badge from './components/badge';
import InputText from './components/input-text';

export default function App() {
  return (
    <div>
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
      </div>
      <div>
        <ButtonIcon icon={TrashIcon} />
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
    </div>
  );
}
