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
            <div key={key} className="card">
              <img src={thing.image} className="card-img"></img>
              <h3>{thing.title}</h3>
            </div>
          );
        })
      )}
    </>
  );
}

export default ArtCard;
