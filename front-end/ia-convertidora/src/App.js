import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import CodeBlock from "./components/CodeBlock.js";
import Select from "./components/Select.js";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`container ${darkMode ? 'darkTheme' : 'lightTheme'}`}>
      <Header changeTheme={() => {
        console.log(darkMode);
        setDarkMode(!darkMode);
      }
        } />
      <main className="main">
        <Select />
        <CodeBlock />
      </main>
    </div>
  );
}

export default App;
