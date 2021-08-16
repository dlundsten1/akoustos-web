import React from "react";
import EmailIconBlack from "../icons/email_black_24dp.svg";
import EmailIconWhite from "../icons/email_white_24dp.svg";
import PolymerIconWhite from "../icons/polymer_white_24dp.svg";
import PolymerIconBlack from "../icons/polymer_black_24dp.svg";
import * as styles from "./styles/footer.module.css";
var classNames = require("classnames/bind");
var cx = classNames.bind(styles);

const Footer = ({ onRoot }) => {
  return (
    <div
      className={cx("wrapper", {
        white: onRoot,
      })}
    >
      <div className={cx("footer")}>
        <div className={cx("content")}>
          <div className={styles.title}>
            {onRoot ? <PolymerIconBlack /> : <PolymerIconWhite />}
            <h2>Akoustos</h2>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                {onRoot ? <EmailIconBlack /> : <EmailIconWhite />}
                <a href="mailto:info@akoustos.se">info@akoustos.se</a>
              </li>
              <li>
                {/* <LinkedInIcon /> */}
                {onRoot ? (
                  <img
                    className={styles.image}
                    height="20"
                    alt="linkedin"
                    src={`linkedinBlue.png`}
                  />
                ) : (
                  <img
                    className={styles.image}
                    height="20"
                    alt="linkedin"
                    src={`linkedin.png`}
                  />
                )}

                <a href="https://www.linkedin.com/company/akoustos/">
                  Akoustos on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
