import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import { GET_ARTS } from "../../utils/queries";

import Carousel from "../Carousel";

function ArtSection(props) {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  const CardComponent = Card;
  const [selectedProject, setSelectedProject] = useState();
  const cardsPerSlide = props.cardsPerSlide;
  const windowWidth = props.windowWidth;

  function MoreSection({ thing }) {
    function handleClose() {
      setSelectedProject();
    }
    // available from db: title, description, date, image
    return thing ? (
      <>
        <section className="modal-grid">
          <figure>
            <img src={thing.image}></img>
          </figure>
          <div className="modal-content">
            <h1>{thing.title}</h1>
            <div className="line-horizontal"></div>
            <p>{thing.description}</p>
          </div>
        </section>
        <button className="close-btn" onClick={handleClose}>
          <ChevronUpIcon
            style={{
              width: "20px",
            }}
          ></ChevronUpIcon>
        </button>
      </>
    ) : (
      <></>
    );
  }

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
        <h3 style={{ alignSelf: "flex-start" }}>Art Things</h3>

        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={artThings}
            cardsPerSlide={cardsPerSlide}
            cardContainerWidth={(windowWidth - 110) / cardsPerSlide}
            CardComponent={CardComponent}
          ></Carousel>
        )}
      </section>
      <MoreSection thing={selectedProject}></MoreSection>
    </>
  );
}

export default ArtSection;
