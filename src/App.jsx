import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [skills, setScills] = useState(['Front-End', 'Back-End', 'CI/CD']);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeFormHandle = (e) => {
    setForm((prevState) => {
      prevState = {...prevState};

      prevState[e.target.name] = e.target.value;

      return prevState;
    });
  }

  const onChangeHandle = (e) => {
    setName (e.target.value);
    setCount(e.target.value.length);
  };

  const onSubmitAddSkill = (e) => {
    
    console.log(e);
    if (e.keyCode === 13){
      setScills((prevState) => {
        return [...prevState, e.target.value];
      });

    }
  };

  return (
    <div>
      <p>Вы нажали на меня {count} раз(a)</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>

      <br />

      <h1>Привет, {name}!</h1>
      <input type="text" onSubmit={(e) => onChangeHandle(e)}/>

      <br />

      <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)}/>

      <ul>
      {
        skills.map((skill) => {
          return (
            <li>{skill}</li>
          )
        })
      }
      </ul>

      <br />

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          onChange={(e) => onChangeFormHandle(e)}
          value={form.email}
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password"
          onChange={(e) => onChangeFormHandle(e)}
          value={form.password}
        />

        <button>Отправить форму</button>
      </form>
    </div>
  );
};

export default App