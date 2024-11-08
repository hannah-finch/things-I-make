import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../utils/queries";

import Carousel from "./Carousel";

function ArtSection() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  function Card({ thing }) {
    return (
      <>
        <div className="card">
          <h2>{thing.title}</h2>
          <img src={thing.image} className="card-img"></img>
          <div className="content">
            <h1>{thing.title}</h1>
            <h3>{thing.description}</h3>
          </div>
        </div>
      </>
    );
  }

  const CardComponent = Card;

  return (
    <>
      <div className="test-2">
        Art
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={artThings}
            cardContainerWidth="300"
            cardsPerSlide="3"
            CardComponent={CardComponent}
          ></Carousel>
        )}
      </div>
    </>
  );
}

export default ArtSection;
