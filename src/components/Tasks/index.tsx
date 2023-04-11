import * as C from './style'

import Task from '../Task'
import { iTask } from '../../App'
import { TbClipboardText } from 'react-icons/tb';

interface iProps {
    tasks: iTask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

const Tasks = ({ tasks, onDelete, onComplete }: iProps) => {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return (
        <C.Section>
            <C.Header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{ tasksQuantity }</span>
                </div>

                <div>
                    <p className='purple'>Concluídas</p>
                    <span>{ completedTasks } de { tasksQuantity }</span>
                </div>
            </C.Header>

            <C.List>
                { tasks.map((task) => (
                    <Task task={ task } key={ task.id } onDelete={ onDelete } onComplete={ onComplete } />
                )) }

                { tasks.length <= 0 && (
                    <C.ThereAreNoTasks>
                        <TbClipboardText size={50} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </C.ThereAreNoTasks>
                )}
            </C.List>
        </C.Section>
    )
}

export default Tasks