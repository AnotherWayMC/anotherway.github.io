import {
  RiDiscordFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiTiktokFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-600 text-white p-7 mt-3">
      <h3 className="text-2xl">AnotherWay</h3>
      <div className="grid sm:grid-cols-3">
        <div>
          <p className="text-lg">Наші соц. мережі:</p>
          <div className="flex gap-2">
            <a href="https://discord.com/invite/nvs3EZY2xE">
              <RiDiscordFill
                size={32}
                className="hover:fill-blue-500 transition-all"
              />
            </a>
            <a href="https://t.me/+izPRloCAPB1lNDdi">
              <RiTelegramFill
                size={32}
                className="hover:fill-blue-400 transition-all"
              />
            </a>
            <a href="https://www.youtube.com/@AnotherWayMC">
              <RiYoutubeFill
                size={32}
                className="hover:fill-red-500 transition-all"
              />
            </a>
            <a href="https://www.youtube.com/@AnotherWayMC">
              <RiTiktokFill
                size={32}
                className="hover:fill-blue-300 transition-all"
              />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg">Навігація</p>
          <ul>
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
        </div>
      </div>
    </footer>
  );
}
export default Footer;
