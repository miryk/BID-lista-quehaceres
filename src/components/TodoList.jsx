
const TodoList = ({list, editListDelete, check, setCheck}) => {


  const checkboxHandler = (e, idx) => {
    setCheck(check.map((item, index) => index === idx ? !check[index] : check[index]))
  }

  const deleteItem = (index) => {
    let auxList = [...list];
    auxList.splice(index, 1)
    editListDelete(auxList)
    console.log(auxList)
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