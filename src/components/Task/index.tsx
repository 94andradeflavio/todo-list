import { iTask } from '../../App';
import * as C from './style';

import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface iProps {
  task: iTask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

const Task = ({ task, onDelete, onComplete }: iProps) => {
  const isCompleted = task.isCompleted;

  return (
    <C.Container>
      <C.CheckButton onClick={() => onComplete(task.id)}>
        { isCompleted ? <BsFillCheckCircleFill /> : <div /> }
      </C.CheckButton>

      <C.Text className={ isCompleted ? 'completed' : '' }>{ task.title }</C.Text>

      <C.DeleteButton onClick={() => onDelete(task.id)}>
        <TbTrash size={ 20 } />
      </C.DeleteButton>
    </C.Container>
  );
}

export default Task