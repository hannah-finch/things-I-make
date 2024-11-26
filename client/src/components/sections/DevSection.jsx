import { useState } from "react";
import { useQuery } from "@apollo/client";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { GET_DEVS } from "../../utils/queries";

import Carousel from "../Carousel";

function DevSection(props) {
  const { loading, data } = useQuery(GET_DEVS);
  const devThings = data ? data.devThings : [];

  const CardComponent = Card;
  const [selectedProject, setSelectedProject] = useState();
  const cardsPerSlide = props.cardsPerSlide;
  const windowWidth = props.windowWidth;

  function MoreSection({ thing }) {
    function handleClose() {
      setSelectedProject();
    }

    const Tech = () => {
      if (thing.tech) {
        const list = thing.tech.map((tech, index) => {
          return (
            <li key={index} className="text-bubble">
              {tech}
            </li>
          );
        });
        return (
          <>
            <ul>{list}</ul>
          </>
        );
      }
    };

    const Collab = () => {
      if (thing.collab) {
        const list = thing.collab.map((name, index) => {
          return (
            <p key={index} className="inline text-bubble-2">
              {name}
            </p>
          );
        });
        return (
          <>
            <h4 className="inline">Collaborators:&nbsp; </h4> {list}
          </>
        );
      }
    };

    const Buttons = ({ deployed, video, github }) => {
      const GithubBtn = () => {
        if (github) {
          return (
            <a className="link-3" href={github} target="_blank">
              View on GitHub
            </a>
          );
        }
      };

      const DeployBtn = () => {
        if (deployed) {
          return (
            <a className="link-3" href={deployed} target="_blank">
              Deployed Application
            </a>
          );
        }
      };

      const VideoBtn = () => {
        if (video) {
          return (
            <a className="link-3" href={video} target="_blank">
              Video Demo
            </a>
          );
        }
      };

      return (
        <>
          <div className="line-horizontal"></div>
          <div className="btn-row">
            <GithubBtn />
            <DeployBtn />
            <VideoBtn />
          </div>
        </>
      );
    };

    // available from db: title, description, date, image, video, tech, collab, github, deployed
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
              <div className="line-horizontal"></div>
              <Tech></Tech>
              <p>{thing.description}</p>
              <Collab></Collab>
              <Buttons {...thing}></Buttons>
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
        <h2>Development Things</h2>
        <div className="line-2"></div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Carousel
            items={devThings}
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

export default DevSection;
