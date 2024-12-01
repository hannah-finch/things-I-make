import { useRef, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

import DevSection from "../components/sections/DevSection";
import DesignSection from "../components/sections/DesignSection";
import ArtSection from "../components/sections/ArtSection";
import MusicSection from "../components/sections/MusicSection";
import CraftSection from "../components/sections/CraftSection";

function HomePage() {
  const devSection = useRef(null);
  const designSection = useRef(null);
  const artSection = useRef(null);
  const musicSection = useRef(null);
  const craftSection = useRef(null);

  const params = useParams();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsPerSlide, setCardsPerSlide] = useState();

  // Scroll sections into view when clicked in navigation
  useEffect(() => {
    const scrollSpot = params.section;
    switch (scrollSpot) {
      case "development":
        devSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "design":
        designSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "art":
        artSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "music":
        musicSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "crafts":
        craftSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [params]);

  // Get the window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // set cards per slide based on window width
  useEffect(() => {
    if (windowWidth >= 1200) {
      setCardsPerSlide("4");
    } else if (1200 > windowWidth && windowWidth > 800) {
      setCardsPerSlide("3");
    } else {
      setCardsPerSlide("2");
    }
  }, [windowWidth]);

  return (
    <>
      <section
        className="flex-col flex-center-all"
        style={{ paddingTop: "50px" }}
      >
        <div className="flex-col flex-center-all" style={{ maxWidth: "700px" }}>
          <div className="spacer hidden-sm"></div>
          <figure className="profile-pic">
            <img
              className="crop-img"
              src="/src/assets/images/profile-sq-color.jpg"
            ></img>
          </figure>
          <div className="spacer"></div>
          <h1>
            Hi, I&apos;m Hannah<span className="hidden-sm"> Belle Finch</span>.
          </h1>
          <h2>I&apos;m a full-stack web developer...</h2>
          <p>
            ... and I make lots of other things too, like and art and music.
            Geerjas asjdk fj asd jfa sdf asdj f lkasdj fasj dlk aks jdfj asdjf w
            sd kksaj da sd fja scj jdalkjs elkjlkklwdkj asdjfs djsdjflakjsdlfkja
            sd jwljk dj d asdkfj sdfj aklsjd kjfasd fjk asdfjalskjd fjaakw lkdj
            lksjfj sdjla
          </p>
          <div className="spacer"></div>
          <Link
            to="/development"
            className="flex-col flex-center-all"
            style={{ zIndex: "100" }}
          >
            <button className="btn-green">See things I make</button>
            <ArrowDownIcon
              style={{ width: "30px", paddingTop: "30px" }}
            ></ArrowDownIcon>
          </Link>
        </div>
      </section>
      <img
        src="src/assets/images/test-landscape.png"
        style={{ width: "100%", marginTop: "-8%", marginBottom: "40px" }}
      ></img>

      <div ref={devSection}>
        <DevSection cardsPerSlide={cardsPerSlide} windowWidth={windowWidth}></DevSection>
      </div>
      <div ref={designSection} id="design-section">
        <DesignSection cardsPerSlide={cardsPerSlide} windowWidth={windowWidth}></DesignSection>
      </div>
      <div ref={artSection} id="artSec">
        <ArtSection cardsPerSlide={cardsPerSlide} windowWidth={windowWidth}></ArtSection>
      </div>
      <div ref={musicSection}>
        <MusicSection cardsPerSlide={cardsPerSlide} windowWidth={windowWidth}></MusicSection>
      </div>
      <div ref={craftSection}>
        <CraftSection cardsPerSlide={cardsPerSlide} windowWidth={windowWidth}></CraftSection>
      </div>
    </>
  );
}

export default HomePage;
