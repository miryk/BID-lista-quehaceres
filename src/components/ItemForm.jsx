import { useState } from "react";


const ItemForm = ({addNewTodo}) => {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    todoItem && addNewTodo(todoItem);
    setTodoItem("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo-item" placeholder="Add New Task" id="todo-item" value={todoItem} onChange={e => setTodoItem(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ItemForm;