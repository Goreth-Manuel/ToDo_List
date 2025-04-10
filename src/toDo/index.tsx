import { FormEvent, useState } from 'react';
import * as S from './style'
import Input from '../components/Input';
import Button from '../components/Button';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const ToDo = () => {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedTask, setEditedTask] = useState('');
    
    function handleAddTodoList(event: FormEvent){
        event.preventDefault();

        if(task === '') return;
        setTodoList((oldTodoList) => [...oldTodoList, task]);
        setTask('');
    }

    function handleDeleteTodoList(todoId: string) {
        setTodoList(todoList.filter((todo) => todo !==todoId))
    }

    function handleEditTodo(index: number) {
        setEditingIndex(index);
        setEditedTask(todoList[index]);
    }

    function handleSaveEdit(index: number) {
        const updatedList = [...todoList];
        updatedList[index] = editedTask;
        setTodoList(updatedList);
        setEditingIndex(null);
        setEditedTask('');
    }

    function handleCancelEdit() {
        setEditingIndex(null);
        setEditedTask('');
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
                {todoList.map((todo, index) =>
                    <li key={todo}>
                        {editingIndex === index ? (
                            <>
                                <S.Input
                                    type="text"
                                    value={editedTask}
                                    onChange={(e) => setEditedTask(e.target.value)}
                                />
                                <S.Icons>
                                    <S.Icon>
                                        <FaCheck
                                            size={20}
                                            color="#28a745"
                                            onClick={() => handleSaveEdit(index)}
                                        />
                                    </S.Icon>
                                    <S.Icon>
                                        <FaTimes
                                            size={20}
                                            color="#dc3545"
                                            onClick={handleCancelEdit}
                                        />
                                    </S.Icon>
                                </S.Icons>
                            </>
                        ) : (
                            <>
                                {todo}
                                <S.Icons> 
                                    <S.Icon> 
                                        <FaEdit 
                                            size={22} 
                                            color="#007bff"
                                            onClick={() => handleEditTodo(index)}
                                        />
                                    </S.Icon>
                                    <S.Icon> 
                                        <FaTrash 
                                            size={20} 
                                            color="#f3241d" 
                                            onClick={() => handleDeleteTodoList(todo)}
                                        />
                                    </S.Icon>
                                </S.Icons>
                            </>
                        )}
                    </li>
                )}
            </ul>
        </S.Container>
    
    )
}
export default ToDo;