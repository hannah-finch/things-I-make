import { useQuery } from "@apollo/client";
import { GET_MUSICS } from "../../utils/queries";

function MusicCard() {
  const { loading, data } = useQuery(GET_MUSICS);
  const musicThings = data ? data.musicThings : [];

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        musicThings.map((thing, key) => {
          return (
            <div key={key}>
              <h1>{thing.title}</h1>
            </div>
          );
        })
      )}
    </>
  );
}

export default MusicCard;
