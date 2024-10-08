import { Link } from "react-router-dom";
import DropMenu from "./DropMenu";

function Navbar() {

  return (
    <>
      <nav>
        <h4>Hannah B Finch</h4>
        <div className="btn-row">
          <Link className="link-1" to="/contact">
            contact
          </Link>
          <Link className="link-1" to="/milestones">
            milestones
          </Link>
          <div className="link-1" style={{ padding: "0" }}>
            <DropMenu
              text="things I make"
              options={[
                ["development", "/development"],
                ["design", "/design"],
                ["art", "/art"],
                ["music", "/music"],
                ["crafts", "/crafts"],
              ]}
            ></DropMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
