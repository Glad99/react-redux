import { IoCloseCircleOutline } from "react-icons/io5";

const TodoList = () => {
  return (
    <div className="flex w-[20rem]">
        <ul className="flex">
            <li className="flex ">
                <span className="flex">
                <input type="checkbox" checked={false} className="checkbox" />
                <p>lorem, ipsum</p>
                </span>
            <IoCloseCircleOutline />
            </li>
        </ul>
    </div>
  )
}

export default TodoList