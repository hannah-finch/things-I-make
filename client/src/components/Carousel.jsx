// This component requires several things to be passed in as props:
// items is a list of content data to iterate through
// cardContainerWidth is a number representing each card's width in px
// cardsPerSlide is a number for how many cards to show at a time
// CardComponent is the actual card, being passed from the parent as a prop for reusability.

// The CardComponent will receive data from each thing in the itemList

import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function Carousel({ items, cardsPerSlide, cardContainerWidth, CardComponent }) {
  const itemList = items;

  const [scrollPosition, setScrollPosition] = useState(0);
  const numOfCards = itemList.length;
  const slideWidth = cardContainerWidth * cardsPerSlide;

  function scrollLeft() {
    if (scrollPosition < 0) {
      const newPosition = scrollPosition + cardContainerWidth * cardsPerSlide;
      setScrollPosition(newPosition);
    } else {
      setScrollPosition(
        -(numOfCards * cardContainerWidth - cardContainerWidth * cardsPerSlide)
      );
    }
  }

  function scrollRight() {
    if (
      scrollPosition >
      -(numOfCards * cardContainerWidth - cardContainerWidth * cardsPerSlide)
    ) {
      const newPosition = scrollPosition - cardContainerWidth * cardsPerSlide;
      setScrollPosition(newPosition);
    } else {
      setScrollPosition(0);
    }
  }

  return (
    <>
      <div className="wrapper" style={{ width: `${slideWidth}px` }}>
        <div
          className="inner"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {!itemList ? (
            <h1>LOADING...</h1>
          ) : (
            itemList.map((thing, key) => {
              return (
                <div
                  key={key}
                  className="card-container"
                  style={{ width: `${cardContainerWidth}px` }}
                >
                  <CardComponent thing={thing}></CardComponent>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="btn-row" style={{ position:"absolute", justifyContent: "space-between", width: "100%", transform: "translateY(30%)", pointerEvents: "none"}}>
        <button className="scroll-btn" onClick={scrollLeft} >
          <ArrowLeftIcon style={{ width: "20px"}}></ArrowLeftIcon>
        </button>
        <button className="scroll-btn" onClick={scrollRight}>
          <ArrowRightIcon style={{ width: "20px" }}></ArrowRightIcon>
        </button>
      </div>
    </>
  );
}

export default Carousel;
