import { useState } from "react";
import { useQuery } from "@apollo/client";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { GET_MUSICS } from "../../utils/queries";

import Carousel from "../Carousel";

function MusicSection(props) {
  const { loading, data } = useQuery(GET_MUSICS);
  const musicThings = data ? data.musicThings : [];

  const CardComponent = Card;
  const [selectedProject, setSelectedProject] = useState();
  const cardsPerSlide = props.cardsPerSlide;
  const windowWidth = props.windowWidth;

  function MoreSection({ thing }) {
    function handleClose() {
      setSelectedProject();
    }
    // available from db: title, lyrics, date, image, cover (boolean)
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
              {/* replace this with play buttons */}
              <a className="link-3">Listen</a>
              <h1>{thing.title}</h1>
              <div className="line-horizontal"></div>
              <p>{thing.lyrics}</p>
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
        <h3 style={{ alignSelf: "flex-start" }}>Music Things</h3>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={musicThings}
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

export default MusicSection;
