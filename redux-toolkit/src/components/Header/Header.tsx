import "./headerStyle.css";

function Header() {
  return (
    <header>
      <div className="header_container_title">
        <p className="header_subtitle">Task List</p>
        <p className="header_title">Task List</p>
      </div>
      <div className="header_emoji">✌</div>
    </header>
  );
}

export default Header;
