import React from "react";
import "./HomeSection.css";
import ImageCarousel from "./../../../components/imageCarousel";
import nelio1 from "./../../../../images/Temp/lidless.jpg";
import nelio2 from "./../../../../images/Temp/monkeytrap.jpg";
import nelio3 from "./../../../../images/Temp/glass.jpg";
import nelio4 from "./../../../../images/Temp/comahorizon.jpg";

export default function HomeSection(props: any) {
  const array = [
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
  ];

  return (
    <section className="home-section hp-section" ref={props.routing}>
      <div className="home-section-content-wrapper">
        <ImageCarousel
          objectArray={array}
          cardAmount={4}
          dynamicClassName={"home-section"}
        ></ImageCarousel>
      </div>
    </section>
  );
}
