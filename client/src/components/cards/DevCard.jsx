import { useQuery } from "@apollo/client";
import { GET_DEVS } from "../../utils/queries";

function DevCard() {
  const { loading, data } = useQuery(GET_DEVS);
  const devThings = data ? data.devThings : [];

  return <>{loading ? <h1>LOADING...</h1> : <h1>{devThings[0].title}</h1>}</>;
}

export default DevCard;
