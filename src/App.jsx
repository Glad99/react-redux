import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/rootReducer";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);
  const counter = useSelector(value => value.counter.counter);
  const name = useSelector(value => value.counter.name)
  const dispatch = useDispatch()
  console.log(counter);

  return (
    <>
      <Todo />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>redux count is {counter}</p>
        {name}
        <button onClick={() => dispatch(increment())}>+</button>
      </div> */}
    </>
  );
}

export default App;