import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onClickAddTodo = () => {
    if (value) {
      const action = addTodo(value);
      dispatch(action);
      setValue("");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <form action="">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter todo"
          style={{ padding: "10px", fontSize: "20px", width: "200px" }}
        />
      </form>
      <button
        style={{ padding: "10px", fontSize: "20px" }}
        onClick={onClickAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
