import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import Sticky from "react-stickynode";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  CustomInput,
  UncontrolledButtonDropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { faCog } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IoIosAnalytics } from "react-icons/io";

export default class FormStickyBasic extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>
            <Card className="main-card mb-3">
              <Sticky enabled={true} top=".app-header" innerZ="15" activeClass="sticky-active-class">
                <CardHeader className="card-header-lg">
                  <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    Sticky Page Headers
                  </div>
                  <div className="btn-actions-pane-right">
                    <Button size="lg" color="warning" className="mr-2" onClick={this.toggleCalendar}>
                      <span className="mr-2 opacity-8">
                        <IoIosAnalytics color="#333333" fontSize="1.2rem" />
                      </span>
                      Dummy Button
                    </Button>
                    <UncontrolledButtonDropdown>
                      <Button size="lg" color="primary">
                        <span className="mr-2 opacity-6">
                          <FontAwesomeIcon icon={faCog} />
                        </span>
                        Actions
                      </Button>
                      <DropdownToggle className="dropdown-toggle-split" caret size="lg" color="primary"/>
                      <DropdownMenu right>
                        <DropdownItem>Menus</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Actions</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Dividers</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </CardHeader>
              </Sticky>
              <CardBody className="pt-4">
                <Col md="8" className="mx-auto">
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2"id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input type="text" name="city" id="exampleCity" />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleState">State</Label>
                        <Input type="text" name="state" id="exampleState" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Check me out
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">Checkboxes</Label>
                    <div>
                      <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox"/>
                      <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one"/>
                      <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled/>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">Radios</Label>
                    <div>
                      <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio"/>
                      <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one"/>
                      <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled/>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">Inline</Label>
                    <div>
                      <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline/>
                      <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline/>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomSelect">Custom Select</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                      <option value="">Select</option>
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                      <option>Value 4</option>
                      <option>Value 5</option>
                    </CustomInput>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomMutlipleSelect">
                      Custom Multiple Select
                    </Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
                      <option value="">Select</option>
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                      <option>Value 4</option>
                      <option>Value 5</option>
                    </CustomInput>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomSelectDisabled">
                      Custom Select Disabled
                    </Label>
                    <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
                      <option value="">Select</option>
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                      <option>Value 4</option>
                      <option>Value 5</option>
                    </CustomInput>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomMutlipleSelectDisabled">
                      Custom Multiple Select Disabled
                    </Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
                      <option value="">Select</option>
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                      <option>Value 4</option>
                      <option>Value 5</option>
                    </CustomInput>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomFileBrowser">
                      File Browser with Custom Label
                    </Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomFileBrowser">
                      File Browser Disabled
                    </Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled/>
                  </FormGroup>
                </Col>
              </CardBody>
              <CardFooter className="d-block text-center">
                <Button size="sm" className="mr-2" color="link">
                  Cancel
                </Button>
                <Button size="lg" color="success">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
