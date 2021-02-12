import React, { Component, Fragment } from "react";
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
  CardTitle,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

export default class AccountElements extends Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
    this.state = {
      formName: "",
      formEmail: "",
      formMessage: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitContact() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null && formName.length < 1) {
      alert("You must fill this form entirely.");
    } else {
      console.log("success");
    }
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Card
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <CardHeader>
              Succseffully Signed-In as {localStorage.getItem("username")}
            </CardHeader>
            <CardBody>
              <p>Additional features coming soon.</p>
              <p>
                <small>For moderators:</small>
                <br />
                Please request authentication from administration.
              </p>
            </CardBody>
          </Card>
          <br />
        </Container>
      </Fragment>
    );
  }
}
