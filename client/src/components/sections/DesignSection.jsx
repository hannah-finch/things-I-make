import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { GET_ARTS } from "../../utils/queries";

import Carousel from "../Carousel";

function DesignSection() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  const CardComponent = Card;
  const [selectedProject, setSelectedProject] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsPerSlide, setCardsPerSlide] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1200) {
      setCardsPerSlide("4");
    } else if (1200 > windowWidth && windowWidth > 800) {
      setCardsPerSlide("3");
    } else {
      setCardsPerSlide("2");
    }
  }, [windowWidth]);

  function MoreSection({ thing }) {
    function handleClose() {
      setSelectedProject();
    }
    // available from db: title, description, date, image
    return thing ? (
      <>
        <section className="modal-background">
          <div className="modal">
            <div className="modal-header">
              <XMarkIcon
                style={{ width: "20px", cursor: "pointer" }}
                onClick={handleClose}
              ></XMarkIcon>
            </div>
            <div className="modal-content">
              <figure>
                <img src={thing.image}></img>
              </figure>
              <h1>{thing.title}</h1>
              <p>{thing.description}</p>
            </div>
            <div className="spacer"></div>
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
        <h2>Design Things</h2>
        <div className="spacer"></div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={artThings}
            cardsPerSlide={cardsPerSlide}
            cardContainerWidth={(windowWidth - 30) / cardsPerSlide}
            CardComponent={CardComponent}
          ></Carousel>
        )}
      </section>
      <MoreSection thing={selectedProject}></MoreSection>
    </>
  );
}

export default DesignSection;
