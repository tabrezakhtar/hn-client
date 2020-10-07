import React from 'react';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Hacker News Reader</a>
        <form>
          <div className="input-field right">
            <input id="search" type="search" required placeholder="Search..."/>
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
