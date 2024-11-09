import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  // link to, then icon name
  const footerIcons = [
    ["https://github.com/hannah-finch",faGithubAlt],
    ["https://www.linkedin.com/in/hannah-finch-663969314/",faLinkedinIn],
    ["mailto:hannahschwen@gmail.com",faEnvelope],
    ["https://www.instagram.com/hannah.b.finch/",faInstagram],
  ]

  return (
    <footer>
      <div className="flex-row">
        {footerIcons.map((link, key)=>{
          return <a
          key = {key}
            href={link[0]}
            target="_blank"
            className="icon-container"
          >
            <FontAwesomeIcon icon={link[1]} color="#d7d7d7" />
          </a>
        })}

      </div>

      <div
        className="line-horizontal"
        style={{ width: "100%", marginBottom: "40px" }}
      ></div>
      <p className="text-light">
        Designed and coded with care, by Hannah B Finch <br></br>Copyright ©
        2024 Hannah B Finch
      </p>
    </footer>
  );
}

export default Footer;
