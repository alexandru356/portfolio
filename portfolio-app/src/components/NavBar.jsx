import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
          setActiveLink('home');
        }else if (currentPath === '/projects') {
          setActiveLink('projects');
        } else if (currentPath === '/contact') {
          setActiveLink('contact');
        }
      }, [window.location.pathname]);

  return (
    <nav className="navbar">
      
        <div className="content">
        <ul>
        <li>
          <a href="/" className={activeLink === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>

        <li>
          <a href="/projects" className={activeLink === 'projects' ? 'active' : ''}>
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className={activeLink === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </li>
      </ul>
        </div>

    </nav>
  );
};

export default Navbar;
