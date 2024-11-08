import { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";

function ArtCard() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  // carousel stuff.....

  const [scrollPosition, setScrollPosition] = useState(0);
  const cardContainerWidth = 300;
  const cardsToScroll = 3;
  const slideWidth = cardContainerWidth * cardsToScroll;
  const numOfCards = artThings.length;

  function scrollLeft() {
    if (scrollPosition < 0) {
      const newPosition = scrollPosition + cardContainerWidth * cardsToScroll;
      setScrollPosition(newPosition);
    }
  }

  function scrollRight() {
    if (
      scrollPosition >
      -(numOfCards * cardContainerWidth - cardContainerWidth * cardsToScroll)
    ) {
      const newPosition = scrollPosition - cardContainerWidth * cardsToScroll;
      setScrollPosition(newPosition);
    }
  }

  // end of carousel stuff.............

  return (
    <>
      <div className="center">
        <div className="wrapper" style={{ width: `${slideWidth}px` }}>
          <div
            className="inner"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {loading ? (
              <h1>LOADING...</h1>
            ) : (
              artThings.map((thing, key) => {
                return (
                  <div
                    key={key}
                    className="card-container"
                    style={{ width: `${cardContainerWidth}px` }}
                  >
                    <div className="card">
                      {/* <img src={thing.image} className="card-img"></img>
                      <div className="content">
                        <h1>{thing.title}</h1>
                        <h3>{thing.description}</h3>
                      </div> */}
                    </div>
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

export default ArtCard;
