import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Todos from "./components/Todos";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const App: React.FC = () => {
  const getStoredTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos) as Todo[];
    }
    return [];
  };

  const [todos, setTodos] = useState<Todo[]>(getStoredTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-8">
        <InputField todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
