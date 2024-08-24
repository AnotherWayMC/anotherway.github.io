import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-50">
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
            <Menu as="div" className="inline-block text-left">
              <div className="link">
                <MenuButton className="flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-black">
                  Мапа
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-black"
                  />
                </MenuButton>
              </div>

              <MenuItems transition className="relative transition ">
                <div className="absolute py-1 bg-slate-500 flex flex-col gap-2 w-auto p-4">
                  <MenuItem>
                    <Link
                      to="https://md.map.anotherway.pp.ua/"
                      className="link"
                    >
                      Мапа середньовіччя
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="https://pl.map.anotherway.pp.ua/"
                      className="link"
                    >
                      Мапа палеоліту
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
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
