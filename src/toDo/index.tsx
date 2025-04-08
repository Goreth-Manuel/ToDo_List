import { useState } from 'react';
import * as S from './style'


const ToDo = () => {
    const [task, setTask] = useState('');
    console.log(task)

    return(
        <S.Container> 
        <form>
            <input 
            type="text" 
            placeholder="Insira o nome da tarefa"
            onChange={(event) => setTask(event.target.value) }
            />
            <button type="submit">Adicionar</button>
        </form>
        </S.Container>
    
    )
}
export default ToDo;