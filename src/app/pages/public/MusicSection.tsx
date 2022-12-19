import React from "react";
import YoutubeCarousel from "../../components/youtubeCarousel";

export default function MusicSection(props: any) {
  const array = [
    {
      url: "https://www.youtube.com/embed/k7bBtZBRvS8",
      alt: "Humavoid Aluminum Rain (feat. Iiro Rantala)",
      header: "Humavoid - Aluminum Rain (feat. Iiro Rantala)",
    },
    {
      url: "https://www.youtube.com/embed/QS87vdQX-IM",
      alt: "Humavoid - Lidless (Official Music Video) Progressive Metal | Noble Demon",
      header:
        "Humavoid - Lidless (Official Music Video) Progressive Metal | Noble Demon",
    },
    {
      url: "https://www.youtube.com/embed/V9duciRi2EA",
      alt: "Humavoid - Coma Horizon (Official Video)",
      header: "Humavoid - Coma Horizon (Official Video)",
    },
  ];

  return (
    <section className="music-section hp-section" ref={props.routing}>
      <div className="smoke-1"></div>
      <div className="music-section-content-wrapper">
        <div>
          <div className="music-header-img"></div>
          <div className="music-service-icons">
            <div className="spotify-icon"></div>
            <div className="itunes-icon"></div>
            <div className="deezer-img"></div>
            <div className="amazon-img"></div>
          </div>
        </div>
        <div>
          <div>
            <h2>ALBUMS</h2>
            <div></div>
          </div>
          <div>
            <h2>SINGLES</h2>
            <div></div>
          </div>
        </div>
        <div>
          <YoutubeCarousel
            objectArray={array}
            cardAmount={1}
            dynamicClassName={"music-section"}
          ></YoutubeCarousel>
        </div>
      </div>
    </section>
  );
}
