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

import "./App.css";
//import { LoginStatusProvider } from '../utils/LoginStatusContext';
//import LoginStatusContext from '../utils/LoginStatusContext';

export function App() {
  return (
    <>
      <Helmet titleTemplate="%s" defaultTitle="Humavoid - Official">
        <meta
          name="description"
          content="Humavoid - Official React application"
        />
      </Helmet>
      <LandingPage />
    </>
  );
}

export function LandingPage() {
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

  const [background, setBackground] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
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
    <main className="landing-page-wrapper">
      <div className="section-wrapper">
        <header
          className={`${
            background
              ? "home-section-header-scrolled"
              : "home-section-header-unscrolled"
          }`}
        >
          <div
            className="navigation-bar-burger-icon"
            onClick={() => scrollToSection(store)}
          >
            <div className="fa fa-bars"></div>
          </div>
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
        <HomeSection routing={home} />
        <BioSection routing={bio} />
        <TourSection routing={tour} />
        <StoreSection routing={store} />
        <ContactSection routing={contact} />
      </div>
    </main>
  );
}

export function HomeSection(props: any) {
  interface Picture {
    src: string;
    alt: string;
  }

  function Carousel() {
    const [pictures, setPictures] = useState<Picture[]>([
      { src: "/img/picture1.jpg", alt: "Picture 1" },
      { src: "/img/picture2.jpg", alt: "Picture 2" },
      { src: "/img/picture3.jpg", alt: "Picture 3" },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Set up autoplay
    /*useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
      }, 3000);
      return () => clearInterval(interval);
    });*/

    // Handle previous button click
    const handlePrevious = () => {
      setCurrentIndex((currentIndex + pictures.length - 1) % pictures.length);
    };

    // Handle next button click
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    return (
      <div className="home-section hp-section" ref={props.routing}>
        <div className="carousel">
          <img
            src={pictures[currentIndex].src}
            alt={pictures[currentIndex].alt}
          />
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-section-content-wrapper">
      <Carousel />
    </div>
  );
}

export function BioSection(props: any) {
  return (
    <div className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
    </div>
  );
}

export function TourSection(props: any) {
  return (
    <div className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
    </div>
  );
}

export function StoreSection(props: any) {
  return (
    <div className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
    </div>
  );
}

export function ContactSection(props: any) {
  return (
    <div className="contact-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
    </div>
  );
}
