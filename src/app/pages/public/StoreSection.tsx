import React from "react";

export default function StoreSection(props: any) {
  return (
    <section className="store-section hp-section" ref={props.routing}>
      <div className="smoke-2"></div>
      <div className="store-section-content-wrapper"></div>
    </section>
  );
}
