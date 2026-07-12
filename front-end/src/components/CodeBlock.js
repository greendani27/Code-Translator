import React, { useState, useEffect } from "react";

export default function CodeBlock({ inputText, setInputText, modifiedText }) {
  
  return (
        <section className="codeSection">
          <div className="codeSectionLeftCol">
            <header className="codeSectionHeader">
              <span>Codigo original</span>
            </header>
            <textarea
              className="codeInput"
              placeholder="Escribe tu código aquí..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="codeSectionRightCol">
            <header className="codeSectionHeader">
              <span>Codigo convertido</span>
            </header>
            <textarea readOnly ={true}
              className="codeOutput"
              placeholder="Aquí aparecerá el código convertido..."
              value={modifiedText}

            ></textarea>
          </div>
        </section>

        
    )
}