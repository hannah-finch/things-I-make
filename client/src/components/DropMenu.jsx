import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function DropMenu(prop) {
  const [isOpen, setIsOpen] = useState(false);

  const OptionList = prop.options.map((option, key) => {
    return (
      <Link className="link-2" to={option[1]} key={key}>
        {option[0]}
      </Link>
    );
  });

  return (
    <div className="flex-col flex-center-all">
      <Link
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="link-1"
        to="/"
      >
        {prop.text}
        <ChevronDownIcon
          className={isOpen ? "rotate-180 transition" : "transition"}
          style={{ width: "16px", marginLeft: "6px", marginTop: "2px" }}
        />
      </Link>
      <div
        className={isOpen ? "drop-menu" : "hidden"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {OptionList}
      </div>
    </div>
  );
}

export default DropMenu;
