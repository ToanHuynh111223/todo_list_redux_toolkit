import { useSelector } from "react-redux";
function ListTodos() {
  const todoList = useSelector((state) => state.todo);
  return (
    <ul>
      {todoList.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
}

export default ListTodos;
