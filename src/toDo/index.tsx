import { FormEvent, useState } from 'react';
import * as S from './style'
import Input from '../components/Input';
import Button from '../components/Button';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const ToDo = () => {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    
    function handleAddTodoList(event: FormEvent){
        event.preventDefault();

        if(task === '') return;
        setTodoList((oldTodoList) => [...oldTodoList, task]);
        setTask('');
    }

    function handleDeleteTodoList(todoId: string) {
        setTodoList(todoList.filter((todo) => todo !==todoId))
    }

    return(
        <S.Container> 
            <ul>
                {todoList.map(todo =>
                    <li key={todo}>
                        {todo}
                        <S.Icons> 
                            <S.Icon> 
                            <FaEdit size={22} color="#007bff" />
                            </S.Icon>

                            <S.Icon> 
                            <FaTrash 
                                size={20} 
                                color="#f3241d" 
                                onClick={() => handleDeleteTodoList(todo)}
                            />
                            </S.Icon>
                        </S.Icons>
                    </li>
                )}
            </ul>
            
        <form onSubmit={handleAddTodoList}>
            <Input 
            type="text" 
            value={task}
            placeholder="Digite o nome da tarefa"
            onChange={(event) => setTask(event.target.value) }
            />
            <Button type="submit">Adicionar</Button>
        </form>
       
        </S.Container>
    
    )
}
export default ToDo;