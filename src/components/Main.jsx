import React from 'react';


export default class Main extends React.Component {
    state = {

    }



render() {
return (
<>
        <main>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                    Taking pictures is savoring life intensely, every hundredth of a second
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">Photography is the story I fail to put into words.</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="#" class="btn-text">Learn more &rarr;</a>
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">

                            <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 class="composition__photo composition__photo--p1"
                                 src="img/nat-1-large.jpg"></img>

                            <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 class="composition__photo composition__photo--p2"
                                 src="img/nat-2-large.jpg"></img>

                            <img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 class="composition__photo composition__photo--p3"
                                 src="img/nat-3-large.jpg"></img>

                            <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1"></img>
                            <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2"></img>
                            <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-features">
                
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-world"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-compass"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                             <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-heart"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Most popular tours
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-3">
                       <div class="card">
                           <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                           </div>
                           <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">$297</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--2">The Forest Hiker</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>7 day tours</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-2">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">$497</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>5 day tours</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">$897</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn btn--green">Discover all tours</a>
                </div>
            </section>

            <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="img/video.mp4" type="video/mp4"></source>
                        <source src="img/video.webm" type="video/webm"></source>
                        Your browser is not supported!
                    </video>
                </div>

                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div class="row">
                    <div class="story">
                        {/* <figure class="story__shape">
                            <img src="img/nat-8.jpg" alt="Person on a tour" class="story__img">
                            <figcaption class="story__caption">Mary Smith</figcaption>
                        </figure> */}
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="img/nat-9.jpg" alt="Person on a tour" class="story__img"></img>
                            <figcaption class="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">In photography there is a reality so subtle that it becomes more real than reality</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section>

            <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full name" id="name" required></input>
                                    <label for="name" class="form__label">Full name</label>
                                </div>

                                <div class="form__group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required></input>
                                    <label for="email" class="form__label">Email address</label>
                                </div>

                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size"></input>
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="large" name="size"></input>
                                        <label for="large" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <button class="btn btn--green">Next step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        

        <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img src="img/nat-8.jpg" alt="Tour photo" class="popup__img"></img>
                    <img src="img/nat-9.jpg" alt="Tour photo" class="popup__img"></img>
                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p class="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                        vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                        vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                        euismod nisi porta.
                    </p>
                    <a href="#" class="btn btn--green">Book now</a>
                </div>
            </div>
        </div>

</>
)
}
}