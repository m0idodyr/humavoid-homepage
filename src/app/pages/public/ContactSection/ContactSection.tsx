import React from "react";
import "./ContactSection.css";

export default function ContactSection(props: any) {
  return (
    <section className="contact-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="contact-section-content-wrapper"></div>
    </section>
  );
}
