import { FormEvent, useState } from "react";

const useToDoModel = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");

  function handleAddTodoList(event: FormEvent) {
    event.preventDefault();

    if (task === "") return;
    setTodoList((oldTodoList) => [...oldTodoList, task]);
    setTask("");
  }

  function handleDeleteTodoList(todoId: string) {
    setTodoList(todoList.filter((todo) => todo !== todoId));
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
    setEditedTask("");
  }

  function handleCancelEdit() {
    setEditingIndex(null);
    setEditedTask("");
  }
  return {
    task,
    setTask,
    todoList,
    editingIndex,
    editedTask,
    setEditedTask,
    handleAddTodoList,
    handleDeleteTodoList,
    handleEditTodo,
    handleSaveEdit,
    handleCancelEdit,
  }
 
};
export default useToDoModel;
