import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

function HomePage() {
  const devSection = useRef(null);
  const designSection = useRef(null);
  const artSection = useRef(null);
  const musicSection = useRef(null);
  const craftSection = useRef(null);

  const params = useParams();

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

  return (
    <>
      <h1>Home</h1>

      <section className="home-banner">

      </section>

      <div className="test" ref={devSection}>
        Development
      </div>
      <div className="test" ref={designSection} id="design-section">
        Design
      </div>
      <div className="test" ref={artSection} id="artSec">
        Art
      </div>
      <div className="test" ref={musicSection}>
        Music
      </div>
      <div className="test" ref={craftSection}>
        Crafts
      </div>
    </>
  );
}

export default HomePage;
