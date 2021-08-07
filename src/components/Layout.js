import React from "react";
import * as styles from "./styles/layout.module.css";
import "./global.css";
import { Header, Footer } from ".";
var classNames = require("classnames/bind");
var cx = classNames.bind(styles);

const layout = (props) => {
  const { children, onRoot } = props;
  return (
    <>
      <Header />
      <div
        className={cx("root", {
          black: onRoot,
        })}
      >
        {/* <div className={cx("root")}> */}
        <div className={styles.container}>{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default layout;
