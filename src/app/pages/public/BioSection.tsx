import React from "react";

export default function BioSection(props: any) {
  return (
    <section className="bio-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="bio-section-content-wrapper"></div>
    </section>
  );
}
