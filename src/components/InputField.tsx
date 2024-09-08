import { useState } from "react";
import { Todo } from "../App";

export type TodosProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const InputField: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div className="mt-12 flex justify-center gap-8  ">
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        className="border rounded-md py-1 px-2 focus:outline-none w-80"
      />
      <button
        onClick={addTodo}
        className="bg-black text-white rounded-md py-2 px-4 hover"
      >
        +
      </button>
    </div>
  );
};

export default InputField;
