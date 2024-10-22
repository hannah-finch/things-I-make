import { useQuery } from "@apollo/client";
import { GET_MUSICS } from "../../utils/queries";

function MusicCard() {
  const { loading, data } = useQuery(GET_MUSICS);
  const musicThings = data ? data.musicThings : [];

  return <>{loading ? <h1>LOADING...</h1> : <h1>{musicThings[0].title}</h1>}</>;
}

export default MusicCard;
