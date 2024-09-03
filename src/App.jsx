import { useRef } from "react";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const todotask = useRef();
  function createtodo(e) {
    e.preventDefault();
    if (todotask.current.value === "") {
      alert("plese put task!");
    } else {
      todo.push(todotask.current.value);
      setTodo([...todo]);
      console.log(todo);
      todotask.current.value = "";
    }
  }
  const delet = (index) => {
    console.log("delet", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  const edit = (index) => {
    console.log("edit", index);
    const edittodo = prompt("edit Task!");
    todo.splice(index, 1, edittodo);
    setTodo([...todo]);
  };
  return (
    <>
      <div class="foam">
        <h1 class="login">ToDo App</h1>
        <form onSubmit={createtodo}>
          <input class="name" type="text" placeholder="Task" ref={todotask} />
          <button class="button">
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
        </form>

        {todo.length > 0 ? (
          todo.map((todoitemm, index) => {
            return (
              <div className="tasktodo" key={index}>
                <p class="task">{todoitemm}</p>
                <div className="todobtn">
                <button className="taskbtn" onClick={() => delet(index)}>
                  <i class="fa-solid fa-trash-can"></i>
                </button>
                <button className="taskbtn" onClick={() => edit(index)}>
                  <i class="fa-solid fa-pen"></i>
                </button>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Task Not Found!</h3>
        )}
      </div>
    </>
  );
}
export default App;
