import React from "react";
import "./BioSection.css";

export default function BioSection(props: any) {
  return (
    <section className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="bio-section-content-wrapper"></div>
    </section>
  );
}
