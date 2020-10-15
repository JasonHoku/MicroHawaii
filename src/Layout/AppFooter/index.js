import React, { Fragment } from "react";
import MegaMenuFooter from "./Components/FooterMegaMenu";
import FooterDots from "./Components/FooterDots";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
           
        <img src="./images/collections.png" />
  


  &nbsp;<h4>All New <strong>Wood</strong>Series</h4>


            </div>
            <div className="app-footer-right">
              <a href="./about"> Privacy</a>
            </div>
          </div>
        </div>
        
      </Fragment>
    );
  }
}

export default AppFooter;
