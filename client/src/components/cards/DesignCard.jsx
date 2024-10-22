import { useQuery } from "@apollo/client";
import { GET_DESIGNS } from "../../utils/queries";

function DesignCard() {
  const { loading, data } = useQuery(GET_DESIGNS);
  const designThings = data ? data.designThings : [];

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        designThings.map((thing, key) => {
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

export default DesignCard;
