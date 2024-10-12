// import { useState } from 'react'
import { RiArrowRightLine } from '@remixicon/react';
import './App.scss';

function App() {
  return (
    <>
      <div className="wedding">
        <header className="wedding__header">
          <ul className="wedding__header-items">
            <li className="wedding__header-item">
              <a href="#banner">Home</a>
            </li>
            {/* <li className="wedding__header-item"> */}
            {/*   <a href="#our-story">Our Story</a> */}
            {/* </li> */}
            {/* <li className="wedding__header-item"> */}
            {/*   <a href="#invitation">Invitation</a> */}
            {/* </li> */}
            {/* <li className="wedding__header-item"> */}
            {/*   <a href="#prenup">Prenup</a> */}
            {/* </li> */}
            {/* <li className="wedding__header-item"> */}
            {/*   <a href="#wedding-party">Wedding Party</a> */}
            {/* </li> */}
            <li className="wedding__header-item">
              <a href="#faqs">FAQs</a>
            </li>
            <li className="wedding__header-item">
              <a href="#rsvp">RSVP</a>
            </li>
          </ul>
        </header>

        <section id="banner">
          <div className="wedding__banner">
            <div className="wedding__banner-date-container">
              <h1 className="wedding__banner-date">122824</h1>
            </div>
            <div className="wedding__banner-layer"></div>
            <div className="wedding__banner-contents">
              <h4>We,</h4>
              <h2>Joshua &amp; Keycil</h2>
              <p>
                together with <b>our parents</b>, joyfully invite you to our wedding, where the
                breathtaking view of Mayon inspires a love story written in the beauty of ash and
                fire.
              </p>
              <p>Saturday, December 28, 2024</p>
              <a
                className="wedding__banner-button button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeunbAcctFrowFmYCHaKRIJNsJLY8XoUcgRr1COMO5kVHg4ZQ/viewform"
                target="blank"
              >
                Save the date&ensp;
                <RiArrowRightLine />
              </a>
            </div>
          </div>
        </section>

        {/* <section id="our-story"> */}
        {/* </section> */}
        {/**/}
        {/* <section id="invitation"> */}
        {/* </section> */}
        {/**/}
        {/* <section id="prenup"> */}
        {/* </section> */}
        {/**/}
        {/* <section id="wedding-party"> */}
        {/* </section> */}
        {/**/}
        {/* <section id="faqs"> */}
        {/* </section> */}

        <section id="rsvp">
          <div className="wedding__rsvp">
            <div className="wedding__rsvp-container">
              <h2 className="wedding__rsvp-header">Répondez S&apos;il Vous Plaît.</h2>
              <p className="wedding__rsvp-context">
                It is with great pleasure that we invite you to the wedding of{' '}
                <span>Joshua Ryan Velasquez &amp; Keycil Princesa</span>, to be held at the
                Tula-Tula Pequeño, Ligao City, Albay on the twenty-eight day of December in the year
                2024.
              </p>
              <p className="wedding__rsvp-context">
                To ensure your place in this celebration, we kindly request that you use the
                provided form to reserve your seat. Please note that each guest may secure only one
                seat per submission.
              </p>
              <p className="wedding__rsvp-context">
                Should you wish to reserve on behalf of another invited guest, we ask you to
                complete an additional form.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeunbAcctFrowFmYCHaKRIJNsJLY8XoUcgRr1COMO5kVHg4ZQ/viewform"
                target="blank"
              >
                Go to RSVP form
              </a>
            </div>
          </div>
        </section>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
