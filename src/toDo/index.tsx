import { FormEvent, useState } from 'react';
import * as S from './style'
import Input from '../components/Input';
import Button from '../components/Button';

const ToDo = () => {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    
    function handleAddTodoList(event: FormEvent){
        event.preventDefault();

        if(task === '') return;
        setTodoList((oldTodoList) => [...oldTodoList, task]);

        setTask('');
    }

    return(
        <S.Container> 
        <form onSubmit={handleAddTodoList}>
            <Input 
            type="text" 
            value={task}
            placeholder="Digite o nome da tarefa"
            onChange={(event) => setTask(event.target.value) }
            />
            <Button type="submit">Adicionar</Button>
        </form>
        <ul>
            {todoList.map(todo =>
                <li key={todo}>{todo}</li>
             )}
        </ul>
        </S.Container>
    
    )
}
export default ToDo;