import { useQuery } from "@apollo/client";
import { GET_CRAFTS } from "../../utils/queries";

function CraftCard() {
  const { loading, data } = useQuery(GET_CRAFTS);
  const craftThings = data ? data.craftThings : [];

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        craftThings.map((thing, key) => {
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

export default CraftCard;
