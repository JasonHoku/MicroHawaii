import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

export default class NavsHGrid extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}
