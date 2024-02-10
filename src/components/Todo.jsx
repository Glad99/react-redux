import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-1 ">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered  input-md input-accent w-full max-w-xs"
        />
        <button
  className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
</div>
<TodoList />
</div>
  )
}

export default Todo