import { useState } from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const addTodoToList = (newTodo) => {
    // let aux = [...todoList];
    // aux.push(newTodo);
    setTodoList([...todoList, newTodo]);
    setCheckedList([...checkedList, false])
  }

  const editList = (newList) => {
    setTodoList(newList);
  }



  return (
    <>
      <ItemForm addNewTodo={addTodoToList}/>
      <h1>My To Do List</h1>
      <TodoList list={todoList} editListDelete={editList} check={checkedList} setCheck={setCheckedList}/>
    </>
  )
}

export default App

