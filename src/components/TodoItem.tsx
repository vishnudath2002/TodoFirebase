import React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;