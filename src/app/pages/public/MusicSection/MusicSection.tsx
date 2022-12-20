import React from "react";
import "./MusicSection.css";
import YoutubeCarousel from "./../../../components/youtubeCarousel";
import lidless from "./../../../../images/Temp/lidless.jpg";
import monkeytrap from "./../../../../images/Temp/monkeytrap.jpg";
import glass from "./../../../../images/Temp/glass.jpg";
import comahorizon from "./../../../../images/Temp/comahorizon.jpg";

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
        <div className="music-header-and-service-icons-wrapper">
          <div className="music-header-img"></div>
          <div className="music-service-icons">
            <div className="spotify-icon"></div>
            <div className="itunes-icon"></div>
            <div className="deezer-img"></div>
            <div className="amazon-img"></div>
          </div>
        </div>
        <div className="albums-and-singles-and-video-wrapper">
          <div className="albums-and-singles-wrapper">
            <div className="albums-wrapper">
              <div className="albums-header">ALBUMS</div>
              <div className="albums-showcase-wrapper">
                <div className="albums-showcase-card">
                  <img className="albums-showcase-card-image" src={lidless} />
                  <div className="albums-showcase-card-text">Lidless</div>
                </div>
                <div className="albums-showcase-card">
                  <img className="albums-showcase-card-image" src={glass} />
                  <div className="albums-showcase-card-text">Glass</div>
                </div>
                <div className="albums-showcase-card">
                  <img
                    className="albums-showcase-card-image"
                    src={comahorizon}
                  />
                  <div className="albums-showcase-card-text">Coma Horizon</div>
                </div>
              </div>
            </div>
            <div>
              <div className="singles-header">SINGLES</div>
              <div className="singles-showcase-wrapper">
                <div className="singles-showcase-card">
                  <img
                    className="singles-showcase-card-image"
                    src={monkeytrap}
                  />
                  <div className="singles-showcase-card-text">Monkey Trap</div>
                </div>
                <div className="singles-showcase-card">
                  <img
                    className="singles-showcase-card-image"
                    src={monkeytrap}
                  />
                  <div className="singles-showcase-card-text">Gorilla Trap</div>
                </div>
                <div className="singles-showcase-card">
                  <img
                    className="singles-showcase-card-image"
                    src={monkeytrap}
                  />
                  <div className="singles-showcase-card-text">Baboon Trap</div>
                </div>
              </div>
            </div>
          </div>
          <div className="music-video-wrapper">
            <YoutubeCarousel
              objectArray={array}
              cardAmount={1}
              dynamicClassName={"music-section"}
            ></YoutubeCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
