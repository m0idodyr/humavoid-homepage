import React from "react";

export default function TourSection(props: any) {
  return (
    <section className="tour-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="tour-section-content-wrapper"></div>
    </section>
  );
}
