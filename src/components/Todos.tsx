import React from "react";
import { TodosProps } from "./InputField";

const Todos: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className="bg-slate-100 w-96 p-4 rounded-md flex flex-col gap-3 ">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`border rounded-xl p-2 flex gap-4 ${
            todo.isCompleted ? "bg-green-300" : "bg-red-300"
          }`}
        >
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
