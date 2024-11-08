import { useQuery } from "@apollo/client";
import { GET_ARTS } from "../../utils/queries";

function ArtCard() {
  const { loading, data } = useQuery(GET_ARTS);
  const artThings = data ? data.artThings : [];

  // carousel stuff.....

  const buttonsWrapper = document.querySelector(".map");
  const slides = document.querySelector(".inner");

  buttonsWrapper.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach((item) =>
        item.classList.remove("active")
      );
      if (e.target.classList.contains("first")) {
        slides.style.transform = "translateX(-0%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains("second")) {
        slides.style.transform = "translateX(-33.33333333333333%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains("third")) {
        slides.style.transform = "translatex(-66.6666666667%)";
        e.target.classList.add("active");
      }
    }
  });

  // end of carousel stuff.............

  return (
    <>
      <div className="center">
        <div className="wrapper">
          <div className="inner">
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Product Design</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Custom Website</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
            <div className="card">
              <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png"></img>
              <div className="content">
                <h1>Digital Marketing</h1>
                <h3>UI/UX, Design</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          <button className="active first"></button>
          <button className="second"></button>
          <button className="third"></button>
        </div>
      </div>

      {/* {loading ? (
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
      )} */}
    </>
  );
}

export default ArtCard;
