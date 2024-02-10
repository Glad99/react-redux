import { useState } from "react"
import TodoList from "./TodoList"
import { useDispatch } from "react-redux";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)
  };
  return (
    <div className="flex flex-col justify-center m-10 w-screen overflow-x-hidden items-center">
      <div className="flex gap-1 w-full justify-center items-center">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Type here"
          className="input input-bordered  input-md input-accent w-full max-w-xs"
        />
        <button onClick={() =>dispatch (addTodo(input))}
  className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Add
</button>
</div>
<TodoList />
</div>
  )
}

export default Todo