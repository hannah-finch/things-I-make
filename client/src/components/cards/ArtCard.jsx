import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";

function ArtCard() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  return <>{loading ? <h1>LOADING...</h1> : <h1>{artThings[0].title}</h1>}</>;
}

export default ArtCard;
