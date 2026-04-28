import Text from './components/text';
import TrashIcon from './assets/icons/transh.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import Icon from './components/icons';

export default function App() {
  return (
    <div>
      <div className="grid gap 3">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>
      </div>
      <div>
        <TrashIcon className="fill-pink-base" />
        <Icon svg={SpinnerIcon} animate />
      </div>
    </div>
  );
}
