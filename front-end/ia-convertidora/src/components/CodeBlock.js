export default function CodeBlock() {
    return (
        <section className="codeSection">
          <div className="codeSectionLeftCol">
            <header className="codeSectionHeader">
              <span>Codigo original</span>
            </header>
            <textarea
              className="codeInput"
              placeholder="Escribe tu código aquí..."
            ></textarea>
          </div>
          <div className="codeSectionRightCol">
            <header className="codeSectionHeader">
              <span>Codigo convertido</span>
            </header>
            <textarea readOnly ={true}
              className="codeOutput"
              placeholder="Aquí aparecerá el código convertido..."
            ></textarea>
          </div>
        </section>
    )
}