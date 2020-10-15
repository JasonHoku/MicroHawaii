import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
} from "reactstrap";

export default class FormInputGroupButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>I'm a button</Button>{" "}
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown addonType="append"
            isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
          </InputGroupButtonDropdown>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupButtonDropdown addonType="prepend"
            isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
          </InputGroupButtonDropdown>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append">
            <Button color="secondary">I'm a button</Button>{" "}
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
