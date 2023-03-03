import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";
function ListTodos() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onClickDeleteTodo = (index) => {
    const action = removeTodo(index);
    dispatch(action);
  };
  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <li key={index} style={{ marginBottom: "10px" }}>
            {todo}
            <button
              style={{ marginLeft: "30px", padding: "10px" }}
              onClick={() => onClickDeleteTodo(index)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListTodos;
