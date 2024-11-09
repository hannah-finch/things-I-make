import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../utils/queries";

import Carousel from "./Carousel";

function MoreSection({ thing }) {
  // title, description, date, image
  return thing ? (
    <>
      <section>
        <h1>TEST section for more info</h1>
        <h1>{thing.title}</h1>
      </section>
    </>
  ) : (
    <>
      <h1>NOTHING SELECTED</h1>
    </>
  );
}

function ArtSection() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  const CardComponent = Card;
  const [selectedProject, setSelectedProject] = useState();

  function Card({ thing }) {
    function handleClick() {
      setSelectedProject(thing);
    }

    return (
      <>
        <div className="card" onClick={handleClick}>
          <figure>
            <img src={thing.image} className="crop-img"></img>
          </figure>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="flex-col flex-center-all carousel-section">
        <h2>Art Things</h2>
        <div className="spacer"></div>
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
      </section>
      <MoreSection thing={selectedProject}></MoreSection>
    </>
  );
}

export default ArtSection;
