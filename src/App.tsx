import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Todos from "./components/Todos";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-8">
        <InputField todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
