import formatDate from "../../utils/formatDate";

const TodoItem = ({ setTodos, todo }) => {
    // Функция переключения статуса задач
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

          localStorage.setItem('todos', JSON.stringify(prevState));
    
          return prevState;
        });
    }
    
    // Функция удаления 
    const onDeleteTodoById = (id) => {
        setTodos((prevState) => {
          prevState = [...prevState];
    
          prevState = prevState.filter((todo) => todo.id !== id);
    
          return prevState;
        });
    }
    return (
        <div className="product">
            <h3 className="name">{todo.name} ({formatDate(todo.date)})</h3>
            <div className="buttons">
                <button className="button" onClick={() => onCheckedToggle(todo.id)}>{todo.checked ? "Не выполнена" : "Выполнено"}</button>
                <button className="button" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
            </div>
        </div>
    )
}

export default TodoItem;