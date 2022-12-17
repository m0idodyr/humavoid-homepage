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
import nelio1 from "./../images/Temp/lidless.jpg";
import nelio2 from "./../images/Temp/monkeytrap.jpg";
import nelio3 from "./../images/Temp/glass.jpg";
import nelio4 from "./../images/Temp/comahorizon.jpg";

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
        <div className="humavoid-home-section-logo" />
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

export function HomeSection(props: any) {
  const [array, setArray] = useState([
    {
      src: nelio1,
      alt: "Picture 1",
      header: "LIDLESS",
      text: "Lidlem ipsum doloress sit ametess, consectetouress adipischingess elitess, se do eiusmoless temporess incididunless ut laboress et doloress magna aliqua.",
    },
    {
      src: nelio2,
      alt: "Picture 2",
      header: "ALUMINUM RAIN",
      text: "Aluminum ipsumain dolorain sit ametrain, consecteturinum adipiscingum elit, sed do eiusmoduminum temporain incididunt ut laboreum et dolore magnarain aliqua.",
    },
    {
      src: nelio3,
      alt: "Picture 3",
      header: "FORTUNE FOR DEMISE",
      text: "Fortune ipsum dolor sit ametise, consecteturise adipiscing eliturne, sed do eiusmodise tempor incididunt ut laboremise et dolortune magna aliqua.",
    },
    {
      src: nelio4,
      alt: "Picture 4",
      header: "COMA HORIZON",
      text: "Lorem ipsum dolorizon sit amet, consectetur adipiscing elit, sed do eiusmod tempor comdunt ut labore et dolore magnazon aliqua.",
    },
  ]);

  const shiftForward = () => {
    let a = array.length - 1;
    let b = array[a];
    let [...newArr] = array.slice(0, -1);
    let rdyArray = [b].concat(newArr);
    setArray(rdyArray);
  };

  const shiftBackwards = () => {
    let a = array[0];
    let [...newArr] = array.slice(1);
    let rdyArray = newArr.concat(a);
    setArray(rdyArray);
  };

  return (
    <div className="home-section hp-section" ref={props.routing}>
      <div className="home-section-content-wrapper">
        <div className="home-section-carousel-wrapper">
          <div
            className="home-section-shift-carousel-backwards-button"
            onClick={shiftForward}
          ></div>
          <div className="home-section-carousel-content-wrapper">
            <div className="home-section-carousel-showcase-card">
              <img src={array[0].src} alt={array[0].alt}></img>
              <h1>{array[0].header}</h1>
              <p>{array[0].text}</p>
            </div>
            <div className="home-section-carousel-showcase-card">
              <img src={array[1].src} alt={array[1].alt}></img>
              <h1>{array[1].header}</h1>
              <p>{array[1].text}</p>
            </div>
            <div className="home-section-carousel-showcase-card">
              <img src={array[2].src} alt={array[2].alt}></img>
              <h1>{array[2].header}</h1>
              <p>{array[2].text}</p>
            </div>
            <div className="home-section-carousel-showcase-card">
              <img src={array[3].src} alt={array[3].alt}></img>
              <h1>{array[3].header}</h1>
              <p>{array[3].text}</p>
            </div>
          </div>
          <div
            className="home-section-shift-carousel-forward-button"
            onClick={shiftBackwards}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function BioSection(props: any) {
  return (
    <div className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="bio-section-content-wrapper"></div>
    </div>
  );
}

export function TourSection(props: any) {
  return (
    <div className="tour-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="tour-section-content-wrapper"></div>
    </div>
  );
}

export function StoreSection(props: any) {
  return (
    <div className="store-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="store-section-content-wrapper"></div>
    </div>
  );
}

export function ContactSection(props: any) {
  return (
    <div className="contact-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="contact-section-content-wrapper"></div>
    </div>
  );
}
