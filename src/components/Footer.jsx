import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="footer__logo-box">
            <picture class="footer__logo">
              <source
                srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                media="(max-width: 37.5em)"
              ></source>
              <img
                srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
                alt="Full logo"
                src="img/logo-green-2x.png"
              ></img>
            </picture>
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <div class="footer__navigation">
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Company
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Contact
                    </a>
                  </li>
                 
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      GitHub
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-1-of-2">
              <p class="footer__copyright">
                <a href="#" class="footer__link">
                  Kahil Nayton
                </a>
                . Copyright &copy; 2019
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
