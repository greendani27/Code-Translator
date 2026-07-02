import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="headerLeftCol">
          <div>
            <i className="bi bi-fire">aaaaaaaa</i>
          </div>
        </div>
        <div className="headerRightCol">
          <div className="headerItem">
            <i className="bi bi-clock-history">Historial</i>
          </div>
          <div className="headerItem">
            <i className="bi bi-gear-fill">Ajustes</i>
          </div>
          <div className="headerItem">
            <i className="bi bi-moon-fill"></i>
          </div>
          <div className="headerItem">
            <i className="bi bi-person-fill"></i>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="swapper">
          <div className="swapperLeftCol">
            <span>De:</span>
            <select className="formControl" defaultValue="java">
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="python">Python</option>
            </select>
            <i className="bi bi-arrows"></i>
            <select className="formControl" defaultValue="csharp">
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="python">Python</option>
            </select>
          </div>
          <div className="swapperRightCol">
            <i className="bi bi-lightning-fill">Convertir</i>
          </div>
        </section>

        <section className="codeSection">
          <div className="codeSectionLeftCol">
            <header className="codeSectionHeader">
              <span>Codigo original</span>
              
            </header>
            <textarea className="codeInput" placeholder="Escribe tu código aquí..."></textarea>
          </div>
          <div className="codeSectionRightCol">
            <header className="codeSectionHeader">
              <span>Codigo convertido</span>
              
            </header>
            <textarea className="codeOutput" placeholder="Aquí aparecerá el código convertido..."></textarea>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
