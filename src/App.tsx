import React from "react";

import "./App.css";
import Header from "./components/Header";
import InputField from "./components/InputField";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-8">
        <InputField />
      </div>
    </div>
  );
}

export default App;
