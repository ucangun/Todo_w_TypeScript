import React from "react";
import { TodosProps } from "./InputField";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Todos: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-slate-100 w-96 p-4 rounded-md flex flex-col gap-3 ">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`border rounded-xl py-2 px-4 flex items-center justify-between ${
            todo.isCompleted ? "bg-green-300" : "bg-red-300"
          }`}
        >
          <p>{todo.text}</p>
          <div className="flex gap-2">
            <MdDelete
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            />
            <FaCheck
              className="cursor-pointer"
              onClick={() => handleComplete(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
