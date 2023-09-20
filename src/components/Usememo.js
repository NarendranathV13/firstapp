import React,{useState, useMemo} from 'react';
import '../assets/styles/style.css';
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
const Usememo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation =useMemo(()=>expensiveCalculation(count),[count]);
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
    return (
      <div class="mt-5">
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    );
  };
  export default Usememo;
 