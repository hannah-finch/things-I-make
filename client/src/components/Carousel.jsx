// This component requires several things to be passed in as props:
    // items is a list of content data to iterate through
    // cardContainerWidth is a number representing each card's width in px
    // cardsPerSlide is a number for how many cards to show at a time
    // CardComponent is the actual card, being passed from the parent as a prop for reusability.

// The CardComponent will receive data from each thing in the itemList

import { useState } from "react";

function Carousel({ items, cardContainerWidth, cardsPerSlide, CardComponent }) {
  const itemList = items;

  const [scrollPosition, setScrollPosition] = useState(0);
  const slideWidth = cardContainerWidth * cardsPerSlide;
  const numOfCards = itemList.length;

  function scrollLeft() {
    if (scrollPosition < 0) {
      const newPosition = scrollPosition + cardContainerWidth * cardsPerSlide;
      setScrollPosition(newPosition);
    }
  }

  function scrollRight() {
    if (
      scrollPosition >
      -(numOfCards * cardContainerWidth - cardContainerWidth * cardsPerSlide)
    ) {
      const newPosition = scrollPosition - cardContainerWidth * cardsPerSlide;
      setScrollPosition(newPosition);
    }
  }

  return (
    <>
      <div className="center">
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

        <div className="map">
          <button className="" onClick={scrollLeft}></button>
          <button className="" onClick={scrollRight}></button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
