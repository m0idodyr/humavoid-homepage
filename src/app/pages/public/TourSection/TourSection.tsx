import React from "react";
import "./TourSection.css";

export default function TourSection(props: any) {
  return (
    <section className="tour-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="tour-section-content-wrapper"></div>
    </section>
  );
}
