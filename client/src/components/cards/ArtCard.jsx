import { useState } from "react"

import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";

function ArtCard() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  // carousel stuff.....

  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 400;
  const cardsToScroll = 3;
  const slideWidth = cardWidth*cardsToScroll;
  const numOfCards = artThings.length;

  function scrollLeft() {
    if (scrollPosition < 0) {
    const newPosition = scrollPosition + (cardWidth*cardsToScroll);
    setScrollPosition(newPosition)
    }
    console.log(scrollPosition)
  }

  function scrollRight() {
    if (scrollPosition > (-(numOfCards*cardWidth-cardWidth*cardsToScroll))) {
    const newPosition = scrollPosition - (cardWidth*cardsToScroll);
    setScrollPosition(newPosition)
    }
    console.log(scrollPosition)
  } 

  // end of carousel stuff.............

  return (
    <>
      <div className="center">
        <div className="wrapper" style={{width: `${slideWidth}px`}}>
          <div className="inner" style={{transform: `translateX(${scrollPosition}px)`}}>

      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        artThings.map((thing, key) => {
          return (
            <div key={key} className="card" style={{width: `${cardWidth}px`}}>
              <img src={thing.image} className="card-img"></img>
              <div className="content">
                <h1>{thing.title}</h1>
                <h3>{thing.description}</h3>
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
