import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";

function ArtCard() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        artThings.map((thing, key) => {
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

export default ArtCard;
