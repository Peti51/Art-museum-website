import React from 'react';
import burgerIcon from '../images/Menu-burger-icon.svg';
import '../styles/Main.scss';
import { Link } from 'react-router-dom';
import slidingmenuImg1 from '../images/sliding-menu-img-1.svg';
import slidingmenuImg2 from '../images/slidingmenu-img-2.svg';
import slidingmenuImg3 from '../images/slidingmenu-img-3.svg';
import slidingmenuImg4 from '../images/slidingmenu-img-4.svg';
import slidingmenuImg5 from '../images/slidingmenu-img-5.svg';
import slidingmenuImg6 from '../images/slidingmenu-img-6.svg';

const routes = [
  {
    route: 'Exhibitions & Events',
    path: '',
    imgUrl: slidingmenuImg1
  },
  {
    route: 'Artists & Artworks',
    path: '',
    imgUrl: slidingmenuImg2
  },
  {
    route: 'Collections',
    path: '/',
    imgUrl: slidingmenuImg3
  },
  {
    route: 'Plan Your Visit',
    path: '/Tickets',
    imgUrl: slidingmenuImg4
  },
  {
    route: 'Become a Member',
    path: '',
    imgUrl: slidingmenuImg5
  },
  {
    route: 'Shop',
    path: '',
    imgUrl: slidingmenuImg6
  },
]

export const Header = (({
  setIsMenuOpen,
  isMenuOpen,
  headerTitle,
  setHeaderTitle
}) => {

  const menuHandling = (boolean) => {
    setIsMenuOpen(boolean)
  };

  const routeSelection = (title) => {
    setIsMenuOpen(false);
    if (title === 'Plan Your Visit') {
      setHeaderTitle('Plan Your Visit');
    } else if (title === 'Collections') { 
      setHeaderTitle('Collections');
    }
  }

  return (
    <header className='header'>
      <div className={`header_big-container ${isMenuOpen ? 'header-reversed' : ''}`}>
        <div>
          <div className='header-title'>
            The <br /> Art <br />Museum
          </div>
        </div>
        <h1 className='header-section'>
          {headerTitle}
        </h1>
        <div className='header-burger-button-container' >
          <img
            className='header-burger-button' 
            onClick={() => menuHandling(!isMenuOpen, )}
            src={burgerIcon}
            alt="burgerIcon" 
          />
        </div>
        <ul className='header-nav-bar'>
          {routes.map((item) => (
            <li
              key={item.route}
              className="nav-bar-route"
              onClick={() => routeSelection(item.route)}
              role='button'
            >
              <Link 
                to={item.path}
                className="nav-bar-route"
              >
                {item.route}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
})