import todoLogo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import * as C from './style'
import { ChangeEvent, FormEvent, useState } from 'react';

interface iProps {
    onAddTask: (taskTitle: string) => void;
}

const Header = ({ onAddTask }: iProps) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        if(title === '') {
            return
        }

        onAddTask(title)
        setTitle('')
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    return (
        <C.Header>
            <C.Image src={ todoLogo } alt='Logo Todo List' />

            <C.NewTaskForm onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={ onChangeTitle }
                    value={ title } />
                <button>
                    Criar <AiOutlinePlusCircle size='20' />
                </button>
            </C.NewTaskForm>
        </C.Header>
    )
}

export default Header