// App.tsx
import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ];

  return (
    <div>
      <Header title="Todo App" />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
