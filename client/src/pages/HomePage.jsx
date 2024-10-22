import { useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { ArrowDownIcon } from "@heroicons/react/24/outline";

// import { GET_CRAFTS, GET_DESIGNS, GET_DEVS, GET_MUSICS } from "../utils/queries";
import { GET_ARTS } from "../utils/queries";


function HomePage() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];
  // console.log(artThings)

  const devSection = useRef(null);
  const designSection = useRef(null);
  const artSection = useRef(null);
  const musicSection = useRef(null);
  const craftSection = useRef(null);

  const params = useParams();

  // const { loadingCrafts, dataCrafts } = useQuery(GET_CRAFTS);
  // const { loadingDesigns, dataDesigns } = useQuery(GET_DESIGNS);
  // const { loadingDevs, dataDevs } = useQuery(GET_DEVS);
  // const { loadingMusics, dataMusics } = useQuery(GET_MUSICS);




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
        style={{ width: "100%", marginTop: "-8%" }}
      ></img>

      <div className="test" ref={devSection}>
        Development
      </div>
      <div className="test" ref={designSection} id="design-section">
        Design
      </div>

      <div className="test" ref={artSection} id="artSec">
        Art
      {loading ? <h1>LOADING...</h1>
      : <h1>{artThings[0].title}</h1>}


{/* {artThings.title} */}
        
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
