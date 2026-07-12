export default function Select( {sendCodeToServer }) {
  return (
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
        <i className="bi bi-lightning-fill" onClick={sendCodeToServer}>
          Convertir
        </i>
      </div>
    </section>
  );
}
