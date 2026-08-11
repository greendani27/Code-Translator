export default function Select( {sendCodeToServer, setFromLanguage, setToLanguage} ) {
  return (
    <section className="swapper">
      <div className="swapperLeftCol">
        <span>De:</span>
        <select name="fromLanguage" className="formControl" defaultValue="java" onChange={(e) => {
          setFromLanguage(e.target.value);
        }}>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="python">Python</option>
        </select>
        <i className="bi bi-arrows"></i>
        <select name="toLanguage" className="formControl" defaultValue="csharp" onChange={(e) => {
          setToLanguage(e.target.value);
        }}>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div className="swapperRightCol">
        <i className="bi bi-lightning-fill" onClick={sendCodeToServer}>
          Convertir
        </i>
      </div>
    </section>
  );
}
