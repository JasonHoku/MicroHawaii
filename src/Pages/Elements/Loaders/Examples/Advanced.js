import React, { Component, Fragment } from "react";
import Loader from "react-loader-advanced";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Loader as LoaderAnim } from "react-loaders";

import { Button, Container } from "reactstrap";

const contentBoxStyle = {
  backgroundColor: "white",
  position: "relative",
  padding: 20,
  border: "1px solid lightgrey",
  borderRadius: "5px",
};

class LoadersAdvancedExample extends Component {
  state = {
    loader1: false,
    loader2: false,
    loader3: false,
    loader4: false,
  };

  UNSAFE_componentWillMount() {
    this.load();
  }

  load = () => {
    this.setState({
      loader1: true,
      loader2: true,
      loader3: true,
      loader4: true,
    });

    setTimeout(() => {
      this.setState({ loader1: false });
    }, 1000);

    setTimeout(() => {
      this.setState({ loader2: false });
    }, 3000);

    setTimeout(() => {
      this.setState({ loader3: false });
    }, 5000);

    setTimeout(() => {
      this.setState({ loader4: false });
    }, 6000);
  };

  render() {
    const { loader1, loader2, loader3, loader4 } = this.state;

    const spinner1 = <LoaderAnim color="#eeeeee" type="ball-pulse" />;
    const spinner2 = <LoaderAnim color="#eeeeee" type="line-scale-party" />;
    const spinner3 = <LoaderAnim color="#eeeeee" type="line-scale-pulse-out" />;
    const spinner4 = <LoaderAnim color="#eeeeee" type="line-scale" />;

    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Container fluid>
            <div>
              <Loader message={spinner1} show={loader1} priority={10}>
                <div style={contentBoxStyle}>
                  Loader 1 content
                  <Loader message={spinner2} show={loader2} hideContentOnLoad priority={5}>
                    <div style={contentBoxStyle}>
                      Loader 2 content (hidden until load)
                      <Loader message={spinner3} show={loader4} priority={5}>
                        <div style={contentBoxStyle}>Loader 4 content</div>
                      </Loader>
                    </div>
                  </Loader>
                  <Loader message={spinner4} show={loader3} priority={5}>
                    <div style={{ ...contentBoxStyle, marginTop: 20 }}>
                      Loader 3 content
                    </div>
                  </Loader>
                </div>
              </Loader>
              {!loader4 && (
                <div className="text-center mt-2">
                  <Button color="primary" onClick={this.load}>
                    Load Again
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default LoadersAdvancedExample;
