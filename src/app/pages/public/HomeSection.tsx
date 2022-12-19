import React from "react";
import { useState } from "react";
import nelio1 from "./../../../images/Temp/lidless.jpg";
import nelio2 from "./../../../images/Temp/monkeytrap.jpg";
import nelio3 from "./../../../images/Temp/glass.jpg";
import nelio4 from "./../../../images/Temp/comahorizon.jpg";

export default function HomeSection(props: any) {
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
    <section className="home-section hp-section" ref={props.routing}>
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
    </section>
  );
}
