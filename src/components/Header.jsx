import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <header class="header">
          <div class="header__logo-box">
            <img src="img/logo-white.png" alt="Logo" class="header__logo"></img>
          </div>
        </header>

        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Pictures</span>
            <span class="heading-primary--sub">I take</span>
          </h1>

          <a href="#section-tours" class="btn btn--white btn--animated">
            Here are some photos
          </a>
        </div>
      </>
    );
  }
}

export default Header;
