import React, { useRef, useState } from 'react';
import '../styles/Main.scss';
import searchButton from '../images/searchbutton.png';

export const Searchbar = () => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.style.paddingLeft = '10px';
      setIsFocused(true);
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      inputRef.current.style.paddingLeft = '0';
      setIsFocused(false);
    }
  };

  return (
    <div className="searchbar">
      <div className={`searchbar-container ${isFocused ? 'focused' : ''}`}>
        <input
          ref={inputRef}
          className={`searchbar-inputfield ${isFocused ? 'focused-input' : ''}`}
          type="text"
          placeholder="Explore the Collection"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button className="searchbar-button">
          <img className="searchbar-button-image" src={searchButton} alt="searchbutton" />
        </button>
      </div>
      <div className="searchbar-description-container">
        Advanced Search
      </div>
    </div>
  );
};