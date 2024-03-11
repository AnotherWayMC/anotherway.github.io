import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="max-h-24 sticky">
      <nav className="bg-slate-400 p-3 flex h-full w-screen gap-3">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Логотип Серверу"
              className="h-16 object-contain"
            />
          </Link>
        </div>
        <ul className="flex justify-start items-center flex-grow gap-4">
          <li>
            <Link to="/" className="link">
              Головна
            </Link>
          </li>
          <li>
            <Link to="/map" className="link">
              Мапа
            </Link>
          </li>
          <li>
            <Link
              to="https://anotherway.gitbook.io/anotherway/"
              className="link"
            >
              Вікі
            </Link>
          </li>
          <li>
            <Link to="/media" className="link">
              Медіа
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
