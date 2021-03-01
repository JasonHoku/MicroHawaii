import react from "react";
import React, { Fragment } from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "../Layout/AppHeader/Components/analytics";
import "firebase/storage";
import "firebase/firestore";
import firebase from "firebase/app";
import { Helmet } from "react-helmet";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarVar: "1",
      redirect: false,
    };
  }

  loadRegisterClick(event) {
    document.body.addEventListener("click", async function (e) {
      const cityRef = firebase
        .firestore()
        .collection("totalClicks")
        .doc("value");

      try {
        await firebase.firestore().runTransaction(async (t) => {
          const doc = await t.get(cityRef);

          const newPopulation = doc.data().population + 1;
          t.update(cityRef, { population: newPopulation });
        });
      } catch (e) {
        console.log("Transaction failure:", e);
      }
    });
    ReactGA.pageview(window.location.href + window.location);
    const domNode = findDOMNode(event.target);
    ReactGA.outboundLink(
      {
        label: "Clicked :" + domNode.outerHTML,
      },
      function () {
        try {
        } catch (error) {}
      }
    );
  }

  componentDidMount() {}

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.loadRegisterClick.bind(this),
      false
    );
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboards/home" />;
    }
  };
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>MicroHawaii.com Home Page</title>
          <meta name="description" content="Welcome to MicroHawaii." />
          <link rel="canonical" href="https://microhawaii.com" />
        </Helmet>
        <div
          id="fadeIn"
          className="landingContent "
          onClick={() =>
            (document.getElementById("fadeIn").className =
              "landingContent fadeOut") &
            setTimeout(() => {
              this.setRedirect();
            }, 500)
          }
        >
          {this.renderRedirect()}
          <br />
          <br />
          <CSSTransitionGroup
            component="div"
            transitionName="MainAnimation"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <h1>
                <a style={{ color: "white" }} href="/dashboards/home">
                  MicroHawaii.com
                </a>
              </h1>
            </div>
          </CSSTransitionGroup>
          <br />
          <div>
            <CSSTransitionGroup
              component="div"
              transitionName="MainAnimation3"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div>
                <h3>Unleash Your Web</h3>
              </div>
            </CSSTransitionGroup>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CSSTransitionGroup
            component="div"
            transitionName="MainAnimation4"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <h4>Click Anywhere To Enter</h4>
            </div>
          </CSSTransitionGroup>
          <br />
          <br />
          <br /> <br /> <br /> <br />
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
