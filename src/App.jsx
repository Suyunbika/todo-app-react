import { useState, useEffect } from "react"

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${day}.${month}.${year}`;
}

const App = () => {

  const [todos,setTodos] = useState([
    {
      id: 1, 
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2, 
      name: "Заправить автомобиль",
      date: new Date(),
      checked: false
    }
  ]);

  const [value, setValue] = useState('');

  const onChangeHandle = (event) => {
    setValue(event.target.value);
  }

  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  }

  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          }
        }

        return todo;
      });

      return prevState;
    });
  }

  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    });
  }

  return (
    <div className="main">
      <div>
        <form onSubmit={(e) => onSubmitHandle(e)} className="add-form">
          <h2 className="form-text">Добавить задачу:</h2>
          <input 
            className="input-add"
            type="text" 
            placeholder="Купить молоко..."
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />
        </form>
      </div>

      <div>
        {
          todos.map((todo) => {
            return (
              <div className="product">
                  <h3 className="name">{todo.name} ({formatDate(todo.date)})</h3>
                <div className="buttons">
                  <button className="button" onClick={() => onCheckedToggle(todo.id)}>{todo.checked ? "Не выполнена" : "Выполнено"}</button>
                  <button className="button" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default App