/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import { useContext, Suspense } from "react";
import { useRef } from "react";

import "./App.css";
//import { LoginStatusProvider } from '../utils/LoginStatusContext';
//import LoginStatusContext from '../utils/LoginStatusContext';

export function App() {
  return (
    <>
      <Helmet titleTemplate="%s" defaultTitle="Capitally.io">
        <meta name="description" content="Capitally.io React application" />
      </Helmet>
      <HomePage />
    </>
  );
}

export function HomePage() {
  const isLoggedIn = true;
  const home = useRef(null);
  const bio = useRef(null);
  const tour = useRef(null);
  const store = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className="homepage-wrapper">
      <div className="section-wrapper">
        <section className="home-section hp-section" ref={home}>
          <header className="home-section-header">
            <a
              className="navigation-bar-burger-icon"
              onClick={() => scrollToSection(store)}
            >
              <div className="fa fa-bars"></div>
            </a>
            <div className="humavoid-home-section-logo" />
            <nav className="navigation-bar">
              <ul className="nav-links-wrapper">
                <li onClick={() => scrollToSection(home)}>HOME</li>
                <li onClick={() => scrollToSection(bio)}>BIO</li>
                <li onClick={() => scrollToSection(tour)}>TOUR</li>
                <li onClick={() => scrollToSection(store)}>STORE</li>
                <li onClick={() => scrollToSection(contact)}>CONTACT</li>
                <li onClick={() => scrollToSection(contact)}>EPK</li>
                <li onClick={() => scrollToSection(contact)}>SOCIAL</li>
              </ul>
            </nav>
          </header>
        </section>
        <section className="bio-section hp-section" ref={bio}></section>
        <section className="tour-section hp-section" ref={tour}></section>
        <section className="store-section hp-section" ref={store}></section>
        <section className="contact-section hp-section" ref={contact}></section>
      </div>
    </main>
  );
}
