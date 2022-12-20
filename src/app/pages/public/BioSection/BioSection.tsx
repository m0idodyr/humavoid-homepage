import React from "react";
import "./BioSection.css";
import ImageCarousel from "./../../../components/imageCarousel";
import nelio1 from "./../../../../images/Temp/lidless.jpg";
import nelio2 from "./../../../../images/Temp/monkeytrap.jpg";
import nelio3 from "./../../../../images/Temp/glass.jpg";
import nelio4 from "./../../../../images/Temp/comahorizon.jpg";

export default function BioSection(props: any) {
  const array = [
    {
      src: nelio1,
      alt: "Picture 1",
      header: "LIDLESS",
      text: "Aluminum ipsumain dolorain sit ametrain, consecteturinum adipiscingum elit, sed do eiusmoduminum temporain incididunt ut laboreum et dolore magnarain aliqua.",
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
      text: "Aluminum ipsumain dolorain sit ametrain, consecteturinum adipiscingum elit, sed do eiusmoduminum temporain incididunt ut laboreum et dolore magnarain aliqua.",
    },
    {
      src: nelio4,
      alt: "Picture 4",
      header: "COMA HORIZON",
      text: "Aluminum ipsumain dolorain sit ametrain, consecteturinum adipiscingum elit, sed do eiusmoduminum temporain incididunt ut laboreum et dolore magnarain aliqua.",
    },
  ];
  return (
    <section className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="bio-section-content-wrapper">
        <div className="bio-header"></div>
        <div className="bio-text-and-carousel-wrapper">
          <div className="bio-text"></div>
          <ImageCarousel
            objectArray={[array]}
            cardAmount={1}
            dynamicClassName={"bio-section"}
          ></ImageCarousel>
        </div>
      </div>
    </section>
  );
}
