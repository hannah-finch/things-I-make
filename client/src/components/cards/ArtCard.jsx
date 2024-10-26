// Parent component... Not a card, just info, rename it later cause confusing

import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";
import ExpandCard from "../cards/ExpandCard";

const Cards = () => {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];
  artThings.map((thing, key) => {
    // const image = thing.image
    const expandInfo = ({ thing }) => <h1>{thing.title}jhvvjh</h1>;
    // console.log(thing)
    const stuff = (
      <>
        <ExpandCard
          thing={thing}
          expandInfo={expandInfo}
          key={key}
        ></ExpandCard>
      </>
    );
    return stuff;
  });


};

function ArtCard() {
  // const { loading, data } = useQuery(GET_ARTS);
  // const artThings = data ? data.artThings : [];

  return (
    <>
      <Cards></Cards>
    </>
  );
}

export default ArtCard;
