import { useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const menuToggle = useRef(null);
  const nav = useRef(null);

  useEffect = () => {
    const menu = menuToggle.current;
    const navbar = nav.current;

    menu.addEventListener(onclick, function () {
      navbar.classlist.toggle('slide');
    });
  };

  return (
    <div className="navbar">
      <div className="title">
        <h1>Maulana</h1>
      </div>
      <div className="text">
        <ul ref={nav}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#my-projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu-toggle">
          <input type="checkbox" ref={menuToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
