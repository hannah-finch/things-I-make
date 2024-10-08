import { useState } from "react";
import { Link } from "react-router-dom";

function DropMenu(prop) {
  const [isHover, setIsHover] = useState(false);

  const OptionList = prop.options.map((option, key) => {
    return (
      <Link className="link-2" to={option[1]} key={key}>
        {option[0]}
      </Link>
    );
  });

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="link-1"
      style={{ padding: "8px 12px" }}
    >
      {prop.text}
      <div
        className={isHover ? "drop-menu" : "hidden"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {OptionList}
      </div>
    </div>
  );
}

export default DropMenu;
