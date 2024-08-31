import { useContext } from 'react';
import Logo from '../../../public/assets/shared/logo.svg';
import SlideShowContext from '../../../contexts/SlideShowContext';
import { data } from '../../../data/data'; 
import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  const { open, setOpen } = useContext(SlideShowContext);

  return (
    <header className="headerContainer">
      <nav className="navBar">
        <NavLink to="/" title="Home">
          <img
            src={Logo}
            alt="Logo"
            onClick={() => setOpen(false)}
            className="logoImage"
          />
        </NavLink>
        <NavLink to={open ? '/' : `/gallaria/${data[0].id}/${data[0].name.split(' ').join('-').toLowerCase()}`} title={open ? 'Home' : 'Gallaria'}>
          <p onClick={() => setOpen(!open)} className="navText">
            {open ? 'stop' : 'start'} slideshow
          </p>
        </NavLink>
      </nav>
      <div className="separatorLine">
      </div>
    </header>
  );
}
