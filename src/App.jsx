import { useState } from "react";
import "./App.css";
//any time parent is re-rendered child is re-rendered as well
function App() {
  let id = 0;
  const [count, setCount] = useState(0); //here in useState we enter the initial value, as like start with 0 or false like that and for state variable inside setCount func we have to update new value for state variable, not change the state var value for ex. can't do count++ instead do count + 1
  const [todos, getTodos] = useState([
    {
      id: id++,
      title: "todo1",
      description: "first todo",
      completed: false,
    },
    {
      id: id++,
      title: "todo2",
      description: "second todo",
      completed: true,
    },
  ]);
  const addTodos = () => {
    getTodos([
      ...todos,
      {
        id: id++,
        title: "new todo",
        description: "description of new todo",
        completed: false,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addTodos}>Add random todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id} // Remember to include a unique key when rendering elements in a list
            title={todo.title}
            description={todo.description}
            completed={todo.completed.toString()}
          />
        );
      })}
    </div>
  );
}

//to deal with array, we need to create component for single element
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <br />
      <h3>{props.description}</h3>
      <br />
      <h6>{props.completed}</h6>
      <br />
    </div>
  );
}
//component
// function CustomButton(props) {
//   const onClickHandler = () => {
//     props.setCount2(props.count2 + 1);
//   };

//   return (
//     <button onClick={onClickHandler}>
//       Counter {props.count2} {props.msg}
//     </button>
//   );
// }

export default App;
