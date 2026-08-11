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
  const [fromLanguage, setFromLanguage] = useState("java");
  const [toLanguage, setToLanguage] = useState("csharp");

  const sendCodeToServer = async () => {
    try {
      const body = {
        code: inputText,
        fromLanguage: fromLanguage,
        toLanguage: toLanguage,
      };
      const response = await fetch("http://localhost:8000/convertCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const error = await response.json();
        console.log("Error del servidor:", error);
        return;
      }

      const dataProcessed = await response.json();
      setModifiedText(dataProcessed.modifiedText);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={`container ${darkMode ? "darkTheme" : "lightTheme"}`}>
      <Header
        changeTheme={() => {
          console.log(darkMode);
          setDarkMode(!darkMode);
        }}
      />
      <main className="main">
        <Select
          sendCodeToServer={sendCodeToServer}
          setFromLanguage={setFromLanguage}
          setToLanguage={setToLanguage}
        />
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
