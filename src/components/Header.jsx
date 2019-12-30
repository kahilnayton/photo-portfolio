import React, { Component } from "react";
import logoPic from '../img/camera.png'

class Header extends Component {
  render() {
    return (
      <>
        <header class="header">
          <div class="header__logo-box">
            <img src={logoPic} alt="Logo" class="header__logo"></img>
          </div>
        </header>

        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Photos</span>
            <span class="heading-primary--sub">In photography there is a reality so subtle that it becomes more real than reality</span>
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
