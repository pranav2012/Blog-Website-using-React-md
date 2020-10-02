import React from "react";
import "../Styles/header.scss";

function Header() {
  const data=[""];
  const categories = data.map((d) => <li key={d.name}>{d.name}</li>);
  function navbar() {

  }

  return (
    <div className="Header">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggler" onClick={navbar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="/#">
              <h4>
                Awesome<span>logo</span>
              </h4>
            </a>
          </div>

          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="active">
                <a href="/#">Home</a>
              </li>
              <li class="navbar-dropdown">
                <a
                  href="/#"
                  class="dropdown-toggler"
                  data-dropdown="my-dropdown-id"
                >
                  Categories <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown" id="my-dropdown-id">
                  {categories}
                </ul>
              </li>
              <li class="navbar-dropdown">
                <a href="/#" class="dropdown-toggler" data-dropdown="blog">
                  Blog <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown" id="blog">
                  <li>
                    <a href="/#">View Your Blog</a>
                  </li>
                  <li>
                    <a href="/#">Create New Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
