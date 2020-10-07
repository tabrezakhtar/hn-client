import React from 'react';

function Header() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <form>
          <div class="input-field right">
            <input id="search" type="search" required placeholder="Search..."/>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
