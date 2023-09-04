import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';
import searchbutton from '../images/searchbutton-white.svg';
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
    imgUrl: slidingmenuImg1,
  },
  {
    route: 'Artists & Artworks',
    path: '',
    imgUrl: slidingmenuImg2,
  },
  {
    route: 'Collections',
    path: '/',
    imgUrl: slidingmenuImg3,
  },
  {
    route: 'Plan Your Visit',
    path: '/Tickets',
    imgUrl: slidingmenuImg4,
  },
  {
    route: 'Become a Member',
    path: '',
    imgUrl: slidingmenuImg5,
  },
  {
    route: 'Shop',
    path: '',
    imgUrl: slidingmenuImg6,
  },
];

export const Slidingmenu = ({
  isMenuOpen,
  setIsMenuOpen,
  setHeaderTitle,
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.style.paddingLeft = '13px';
      setIsFocused(true);
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      inputRef.current.style.paddingLeft = '0'; // Adjusted paddingLeft
      setIsFocused(false);
    }
  };

  const routeSelection = (title) => {
    setIsMenuOpen(false);
    if (title === 'Plan Your Visit') {
      setHeaderTitle('Tickets');
    } else {
      setHeaderTitle('Collections');
    }
  };

  return (
    <div className={`slidingmenu ${isMenuOpen ? 'open' : ''}`}>
      <div className="slidingmenu-bigcontainer">
        <div className="slidingmenu-itemcontainer">
          <button className="slidingmenu-searchimage-button">
            <img src={searchbutton} alt="searchbutton" />
          </button>
          <input
            ref={inputRef}
            type="text"
            className={`slidingmenu-searchbar ${isFocused ? 'focused-input' : ''}`}
            placeholder="Search"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        {routes.map((item) => (
          <Link
            onClick={() => routeSelection(item.route)}
            to={item.path}
            className="slidingmenu-itemcontainer"
            key={item.route}
          >
            <div className="slidingmenu-imgcontainer">
              <img src={item.imgUrl} alt={item.route} className="slidingmenu-img" />
            </div>
            <p className="slidingmenu-route" role="button">
              {item.route}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};