import { useState } from "react";

const TodoHeader = ({ setTodos }) => {
    const [value, setValue] = useState("");

    const onChangeHandle = (event) => {
        setValue(event.target.value);
    };

    // Функция добавления задач
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

    return (
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
    );
}

export default TodoHeader;