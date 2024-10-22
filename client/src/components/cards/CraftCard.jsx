import { useQuery } from "@apollo/client";
import { GET_CRAFTS } from "../../utils/queries";

function CraftCard() {
  const { loading, data } = useQuery(GET_CRAFTS);
  const craftThings = data ? data.craftThings : [];

  return <>{loading ? <h1>LOADING...</h1> : <h1>{craftThings[0].title}</h1>}</>;
}

export default CraftCard;
