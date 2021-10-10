import React, { Fragment } from "react";
import MegaMenuFooter from "./Components/FooterMegaMenu";
import FooterDots from "./Components/FooterDots";

import { Link } from "react-router-dom";

class AppFooter extends React.Component {
  render() {
    function decideURLToLoad() {
      if (window.location.pathname === "/home") {
        return <Link to="/calendar"> View Schedule </Link>;
      } else {
        return <Link to="/home"> Site Home </Link>;
      }
    }
    return (
      <Fragment>
        <div
          style={{
            textAlign: "center",
            background: `linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50.71%
  )`,
          }}
          className="app-footer"
        >
          <div style={{ width: "100%", position: "absolute", bottom: "5px" }}>
            <span style={{ position: "absolute", left: "12px", bottom: "7px" }}>
              <Link to="/projects"> Learn More </Link>
            </span>
            <span
              style={{
                alignItems: "center",
                position: "relative",
                bottom: "7px",
              }}
            >
              {decideURLToLoad()}
            </span>
            <span
              style={{
                position: "absolute",
                right: "5px",
                bottom: "7px",
              }}
            >
              <Link to="/contact"> Contact </Link>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFooter;
