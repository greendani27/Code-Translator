export default function Header({ changeTheme }) {
  return (
    <header className="header">
      <div className="headerLeftCol">
        <div>
          <i className="bi bi-fire">aaaaaaaa</i>
        </div>
      </div>
      <div className="headerRightCol">
        <div className="headerItem">
          <i className="bi bi-clock-history"> Historial</i>
        </div>
        <div className="headerItem">
          <i className="bi bi-gear-fill"> Ajustes</i>
        </div>
        <div className="headerItem">
          <i
            className="bi bi-moon-fill"
            onClick={changeTheme}
          ></i>
        </div>
        <div className="headerItem">
          <i className="bi bi-person-fill"></i>
        </div>
      </div>
    </header>
  );
}
