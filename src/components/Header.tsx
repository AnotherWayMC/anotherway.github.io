import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { useState } from 'react';

function Header() {
  // const [hamburgerOpened, setHamburgerOpened] = useState(false);

  // const handleHamburgerClick = () => {
  //   setHamburgerOpened(!hamburgerOpened);
  // };

  return (
    <header className='sticky top-0 left-0 z-50'>
      <nav className='bg-slate-400 p-3 px-6 flex justify-between h-full w-screen gap-3 relative'>
        <div>
          <Link to='/'>
            <img
              src={Logo}
              alt='Логотип Серверу'
              className='h-16 object-contain'
            />
          </Link>
        </div>
        <ul className='hidden justify-start items-center gap-4 sm:flex'>
          <li>
            <Link to='/' className='link'>
              Головна
            </Link>
          </li>
          <li>
            <Link to='https://map.anotherway.pp.ua/' className='link'>
              Мапа
            </Link>
          </li>
          <li>
            <Link
              to='https://anotherway.gitbook.io/anotherway/'
              className='link'
            >
              Вікі
            </Link>
          </li>
          <li>
            <Link to='/media' className='link'>
              Медіа
            </Link>
          </li>
        </ul>
        {/* <div className="block sm:hidden text-right">
          <div
            onClick={handleHamburgerClick}
            className="w-12 h-full flex items-center justify-center"
          >
            <span
              className={
                hamburgerOpened ? "hamburger hamburger-opened" : "hamburger"
              }
            ></span>
          </div>
        </div>
        {hamburgerOpened && (
          <ul className="absolute w-full bg-slate-500 top-0 left-0 p-4 flex flex-col justify-center items-center">
            <li>Test</li>
          </ul>
        )} */}
      </nav>
    </header>
  );
}

export default Header;
