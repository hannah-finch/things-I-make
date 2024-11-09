import { useQuery } from "@apollo/client";
import { GET_DEVS } from "../../utils/queries";

function DevCard() {
  const { loading, data } = useQuery(GET_DEVS);
  const devThings = data ? data.devThings : [];

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        devThings.map((thing, key) => {
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

export default DevCard;
