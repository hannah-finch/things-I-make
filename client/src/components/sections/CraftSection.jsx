import { useState } from "react";
import { useQuery } from "@apollo/client";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { GET_CRAFTS } from "../../utils/queries";

import Carousel from "../Carousel";

function CraftSection(props) {
  const { loading, data } = useQuery(GET_CRAFTS);
  const craftThings = data ? data.craftThings : [];

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
        <section className="modal-background">
          <XMarkIcon
            style={{
              width: "30px",
              cursor: "pointer",
              position: "fixed",
              right: "30px",
              top: "10px",
              padding: "6px",
              backgroundColor: "white",
              borderRadius: "100%",
            }}
            onClick={handleClose}
          ></XMarkIcon>
          <div className="modal-grid">
            <figure>
              <img src={thing.image}></img>
            </figure>
            <div className="modal-content">
              <h1>{thing.title}</h1>
              <div className="line-horizontal"></div>
              <p>{thing.description}</p>
            </div>
          </div>
        </section>
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
        <h3 style={{ alignSelf: "flex-start" }}>Craft Things</h3>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={craftThings}
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

export default CraftSection;
