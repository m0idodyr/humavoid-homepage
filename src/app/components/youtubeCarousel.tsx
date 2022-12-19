import React from "react";
import { useState } from "react";

type CarouselProps = {
  objectArray: Array<any>;
  cardAmount: number;
  dynamicClassName: string;
};

export default function Carousel({
  objectArray,
  cardAmount,
  dynamicClassName,
}: CarouselProps) {
  const [array, setArray] = useState(objectArray);

  const shiftForward = () => {
    let a = array.length - 1;
    let b = array[a];
    let [...newArr] = array.slice(0, -1);
    let rdyArray = [b].concat(newArr);
    setArray(rdyArray);
  };

  const shiftBackwards = () => {
    let a = array[0];
    let [...newArr] = array.slice(1);
    let rdyArray = newArr.concat(a);
    setArray(rdyArray);
  };

  return (
    <div className={dynamicClassName + "-carousel-wrapper"}>
      <div
        className={dynamicClassName + "-shift-carousel-backwards-button"}
        onClick={shiftForward}
      ></div>
      <div className={dynamicClassName + "-carousel-content-wrapper"}>
        {array.slice(0, cardAmount).map((item, key) => {
          return (
            <div
              className={dynamicClassName + "-carousel-showcase-card"}
              key={key}
            >
              <iframe src={item.url} allowFullScreen title="Embedded youtube" />
              <h1>{item.header}</h1>
            </div>
          );
        })}
      </div>
      <div
        className={dynamicClassName + "-shift-carousel-forward-button"}
        onClick={shiftBackwards}
      ></div>
    </div>
  );
}
