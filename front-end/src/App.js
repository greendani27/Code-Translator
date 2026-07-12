import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import CodeBlock from "./components/CodeBlock.js";
import Select from "./components/Select.js";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [inputText, setInputText] = useState("");
  const [modifiedText, setModifiedText] = useState("");

  const sendCodeToServer = async () => {
    try {
      const response = await fetch("http://localhost:8000/convertCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: inputText }),
      });
      const dataProcessed = await response.json();
      setModifiedText(dataProcessed.modifiedText);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={`container ${darkMode ? 'darkTheme' : 'lightTheme'}`}>
      <Header changeTheme={() => {
        console.log(darkMode);
        setDarkMode(!darkMode);
      }
        } />
      <main className="main">
        <Select sendCodeToServer={sendCodeToServer} />
        <CodeBlock
          inputText={inputText}
          setInputText={setInputText}
          modifiedText={modifiedText}
        />
      </main>
    </div>
  );
}

export default App;
