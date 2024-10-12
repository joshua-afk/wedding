import { useState } from 'react'
import './App.scss'

function App() {
  return (
    <>
      <div className="wedding">
        <header className="wedding__header">
          <div className="wedding__header-logo">LOGO</div>
          <ul className="wedding__header-items">
            <li className="wedding__header-item">
              <a href="#our-story">Our Story</a>
            </li>
            <li className="wedding__header-item">
              <a href="#invitation">Invidation</a>
            </li>
            <li className="wedding__header-item">
              <a href="#prenup">Prenup</a>
            </li>
            <li className="wedding__header-item">
              <a href="#wedding-party">Wedding Party</a>
            </li>
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
              <h4>Dear,</h4>
              <h2>Guests</h2>
              <p>We&apos;re getting married! It would mean the world to us if you honor us of your presence.</p>
              <p>Saturday, December 12, 2024</p>
              <button className="wedding__banner-button">Save the date</button>
            </div>
          </div>
        </section>

        <section id="our-story">
        </section>

        <section id="invitation">
        </section>

        <section id="prenup">
        </section>

        <section id="wedding-party">
        </section>

        <section id="faqs">
        </section>

        <section id="rsvp">
        </section>

        <footer>
        </footer>
      </div>
    </>
  )
}

export default App
