
const TodoList = ({list, editListDelete, check, setCheck}) => {


  const checkboxHandler = (e, idx) => {
    setCheck(check.map((item, index) => index === idx ? !check[index] : check[index]))
  }

  const deleteItem = (index) => {
    let auxListItem = [...list];
    auxListItem.splice(index, 1)
    editListDelete(auxListItem)
    let auxListCheck = [...check];
    auxListCheck.splice(index, 1);
    setCheck(auxListCheck);

    console.log(auxListItem, auxListCheck)
  }

  return (
    <div className="show-container">
      {list.map((item, idx) => {
        return (
          <div key={idx} className="item">
            <div className="column-right">
              <input type="checkbox" onChange={(e) => checkboxHandler(e, idx)} checked={check[idx]}/>
              <p className={check[idx] ? "checked" :  ""}>{item}</p>
            </div>
            <button onClick={deleteItem}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList;