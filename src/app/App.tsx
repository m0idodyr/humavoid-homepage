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
import { useRef, useEffect, useState } from "react";
import BioSection from "./pages/public/BioSection";
import ContactSection from "./pages/public/ContactSection";
import HomeSection from "./pages/public/HomeSection";
import StoreSection from "./pages/public/StoreSection";
import TourSection from "./pages/public/TourSection";

import "./App.css";
//import { LoginStatusProvider } from '../utils/LoginStatusContext';
//import LoginStatusContext from '../utils/LoginStatusContext';

export function App() {
  const isLoggedIn = true;
  const home = useRef(null);
  const bio = useRef(null);
  const tour = useRef(null);
  const store = useRef(null);
  const contact = useRef(null);
  const [background, setBackground] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 215) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Helmet titleTemplate="%s" defaultTitle="Humavoid - Official">
        <meta
          name="description"
          content="Humavoid - Official React application"
        />
      </Helmet>
      <main className="landing-page-wrapper">
        <div className="humavoid-logo" />
        <header
          className={`${background ? "header-scrolled" : "header-unscrolled"}`}
        >
          <div className="burger-icon" onClick={() => scrollToSection(store)}>
            <div className="fa fa-bars"></div>
          </div>
          <div className="humavoid-mobile-logo" />
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
        <div className="section-wrapper">
          <HomeSection routing={home} />
          <BioSection routing={bio} />
          <TourSection routing={tour} />
          <StoreSection routing={store} />
          <ContactSection routing={contact} />
        </div>
      </main>
    </>
  );
}
