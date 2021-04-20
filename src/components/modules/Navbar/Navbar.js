import Container from '@components/elements/Container/Container';
import NewSwitch from '@components/elements/Switch/Switch';
import { useTheme } from '@lib/theme/ThemeProvider';
import { NAV_LINKS } from '@lib/utils/constants';
import { Link } from 'gatsby';
import * as React from 'react';

const logoSrc = require(`@components/elements/Icon/icons/icon-logo.svg`)
  .default;

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 bg-background w-full z-50 py-2 md:py-4">
      <Container className="flex justify-between max-w-screen-2xl items-center">
        <Link to="/">
          <img
            src={logoSrc}
            alt="icon-logo"
            style={{ maxWidth: '54px' }}
            className="transform transition-all duration-100 ease-out w-10 md:w-12"
          />
        </Link>
        <div className="flex items-center">
          <ul className="mr-4 hidden md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  className="text-sm p-2 px-4 rounded-md hover:bg-background-dark"
                  to={l.to}
                  partiallyActive
                  activeClassName="bg-background-dark"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <NewSwitch
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={mode === 'dark'}
          />
          <DropdownMenu />
        </div>
      </Container>
    </nav>
  );
};

const DropdownMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="block md:hidden">
      {open && <Backdrop onClick={() => setOpen(false)} />}
      <div className="ml-4 relative">
        <div
          className="space-y-1 p-4 rounded-full hover:bg-background-dark cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-6 h-1 bg-black dark:bg-white rounded-full" />
          <div className="w-6 h-1 bg-black dark:bg-white rounded-full" />
          <div className="w-6 h-1 bg-black dark:bg-white rounded-full" />
        </div>
        {open && (
          <div className="absolute top-18 left-10 w-60 bg-background overflow-hidden flex flex-col transform -translate-x-56 border border-gray-300 rounded-md p-3 shadow-xl dark:border-gray-800">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                className="text-sm block p-4 rounded-md hover:bg-background-dark"
                to={l.to}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Backdrop = ({ onClick }) => (
  <div className="absolute top-0 left-0 h-screen w-screen" onClick={onClick} />
);

export default Navbar;
