import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";
function App() {
  return (
    <div className="App" style={{ fontSize: "26px" }}>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
