import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
  CardTitle,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import contrastus from "../../../assets/images/contrastus.png";
import collage from "../../../assets/images/collage.png";
import mandalashirt from "../../../assets/images/mandalashirt.png";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

export default class Terms extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: "-15px",
              marginBottom: "-15px",

              textAlign: "center",
            }}
            width="100%"
          >
            <CardTitle
              style={{
                textAlign: "center",
                borderRadius: "25px",
                backgroundColor: "#440066BB",
                paddingRight: "10px",
                paddingLeft: "10px",
                fontWeight: "900",
                color: "whitesmoke",
                fontSize: "36px",
              }}
            >
            <h2>MicroHawaii Terms of Service</h2>
            </CardTitle>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col width="100%" style={{ maxWidth: "750px" }}>
              <Card>
                <CardBody>
                  <h3>1. Terms</h3>
                  <p>
                    By accessing the website at{" "}
                    <a href="http://microhawaii.com/">
                      http://microhawaii.com/
                    </a>
                    , you are agreeing to be bound by these terms of service,
                    all applicable laws and regulations, and agree that you are
                    responsible for compliance with any applicable local laws.
                    If you do not agree with any of these terms, you are
                    prohibited from using or accessing this site. The materials
                    contained in this website are protected by applicable
                    copyright and trademark law.
                  </p>
                  <h3>2. Use License</h3>
                  <ol type="a">
                    <li>
                      Permission is granted to temporarily download one copy of
                      the materials (information or software) on MicroHawaii's
                      website for personal, non-commercial transitory viewing
                      only. This is the grant of a license, not a transfer of
                      title, and under this license you may not:
                      <ol type="i">
                        <li>modify or copy the materials;</li>
                        <li>
                          use the materials for any commercial purpose, or for
                          any public display (commercial or non-commercial);
                        </li>
                        <li>
                          attempt to decompile or reverse engineer any software
                          contained on MicroHawaii's website;
                        </li>
                        <li>
                          remove any copyright or other proprietary notations
                          from the materials; or
                        </li>
                        <li>
                          transfer the materials to another person or "mirror"
                          the materials on any other server.
                        </li>
                      </ol>
                    </li>
                    <li>
                      This license shall automatically terminate if you violate
                      any of these restrictions and may be terminated by
                      MicroHawaii at any time. Upon terminating your viewing of
                      these materials or upon the termination of this license,
                      you must destroy any downloaded materials in your
                      possession whether in electronic or printed format.
                    </li>
                  </ol>
                  <h3>3. Disclaimer</h3>
                  <ol type="a">
                    <li>
                      The materials on MicroHawaii's website are provided on an
                      'as is' basis. MicroHawaii makes no warranties, expressed
                      or implied, and hereby disclaims and negates all other
                      warranties including, without limitation, implied
                      warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual
                      property or other violation of rights.
                    </li>
                    <li>
                      Further, MicroHawaii does not warrant or make any
                      representations concerning the accuracy, likely results,
                      or reliability of the use of the materials on its website
                      or otherwise relating to such materials or on any sites
                      linked to this site.
                    </li>
                  </ol>
                  <h3>4. Limitations</h3>
                  <p>
                    In no event shall MicroHawaii or its suppliers be liable for
                    any damages (including, without limitation, damages for loss
                    of data or profit, or due to business interruption) arising
                    out of the use or inability to use the materials on
                    MicroHawaii's website, even if MicroHawaii or a MicroHawaii
                    authorized representative has been notified orally or in
                    writing of the possibility of such damage. Because some
                    jurisdictions do not allow limitations on implied
                    warranties, or limitations of liability for consequential or
                    incidental damages, these limitations may not apply to you.
                  </p>
                  <h3>5. Accuracy of materials</h3>
                  <p>
                    The materials appearing on MicroHawaii's website could
                    include technical, typographical, or photographic errors.
                    MicroHawaii does not warrant that any of the materials on
                    its website are accurate, complete or current. MicroHawaii
                    may make changes to the materials contained on its website
                    at any time without notice. However MicroHawaii does not
                    make any commitment to update the materials.
                  </p>
                  <h3>6. Links</h3>
                  <p>
                    MicroHawaii has not reviewed all of the sites linked to its
                    website and is not responsible for the contents of any such
                    linked site. The inclusion of any link does not imply
                    endorsement by MicroHawaii of the site. Use of any such
                    linked website is at the user's own risk.
                  </p>
                  <h3>7. Modifications</h3>
                  <p>
                    MicroHawaii may revise these terms of service for its
                    website at any time without notice. By using this website
                    you are agreeing to be bound by the then current version of
                    these terms of service.
                  </p>
                  <h3>8. Governing Law</h3>
                  <p>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of Hawaii and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    State or location.
                  </p>
                  <p>
                    <a
                      href="https://getterms.io"
                      title="Generate a free terms of use document"
                    >
                      Terms of Use created with GetTerms.
                    </a>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
