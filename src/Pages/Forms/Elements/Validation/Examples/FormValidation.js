import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio} from 'availity-reactstrap-validation';
import {
    Button, Card, CardBody, Row, Col,
    CardTitle, Label, FormGroup, CustomInput, Container
} from 'reactstrap';

export default class FormValidationExample extends React.Component {
    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Inline Validation</CardTitle>
                                <AvForm>
                                    <Row>
                                        <Col md="6">
                                            {/* With AvField */}
                                            <AvField name="name" label="Name" required/>
                                            {/* With AvGroup AvInput and AvFeedback to build your own */}
                                            <AvGroup>
                                                <Label for="example">Rank</Label>
                                                <AvInput name="rank" id="example" required/>
                                                <AvFeedback>This is an error!</AvFeedback>
                                            </AvGroup>
                                            {/* Radios */}
                                            <AvRadioGroup name="radioExample" label="Radio Buttons!" required
                                                          errorMessage="Pick one!">
                                                <AvRadio label="Bulbasaur" value="Bulbasaur"/>
                                                <AvRadio label="Squirtle" value="Squirtle"/>
                                                <AvRadio label="Charmander" value="Charmander"/>
                                                <AvRadio label="Pikachu" value="Pikachu" disabled/>
                                            </AvRadioGroup>

                                            <AvRadioGroup inline name="radioExample2" label="Radio Buttons! (inline)"
                                                          required>
                                                <AvRadio label="Bulbasaur" value="Bulbasaur"/>
                                                <AvRadio label="Squirtle" value="Squirtle"/>
                                                <AvRadio label="Charmander" value="Charmander"/>
                                                <AvRadio label="Pikachu" value="Pikachu" disabled/>
                                            </AvRadioGroup>

                                            <AvRadioGroup name="radioCustomInputExample" label="Custom Radio Buttons!"
                                                          required>
                                                <AvRadio customInput label="Bulbasaur" value="Bulbasaur"/>
                                                <AvRadio customInput label="Squirtle" value="Squirtle"/>
                                                <AvRadio customInput label="Charmander" value="Charmander"/>
                                                <AvRadio customInput label="Pikachu" value="Pikachu" disabled/>
                                            </AvRadioGroup>

                                            <AvRadioGroup inline name="radioCustomInputExample2"
                                                          label="Custom Radio Buttons! (inline)"
                                                          required>
                                                <AvRadio customInput label="Bulbasaur" value="Bulbasaur"/>
                                                <AvRadio customInput label="Squirtle" value="Squirtle"/>
                                                <AvRadio customInput label="Charmander" value="Charmander"/>
                                                <AvRadio customInput label="Pikachu" value="Pikachu" disabled/>
                                            </AvRadioGroup>
                                        </Col>
                                        <Col md="6">
                                            {/* With select and AvField */}
                                            <AvField type="select" name="select" label="Option"
                                                     helpMessage="Idk, this is an example. Deal with it!">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </AvField>

                                            <AvField type="select" name="select-multiple" label="Option"
                                                     helpMessage="MULTIPLE!"
                                                     multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </AvField>

                                            <FormGroup>
                                                <AvGroup check>
                                                    <AvInput type="checkbox" name="checkbox"/>
                                                    <Label check for="checkbox"> Check it out</Label>
                                                </AvGroup>


                                                <AvField type="checkbox" name="avFieldCheckbox"
                                                         label="Check out this AvField checkbox"
                                                         required/>

                                                <AvInput tag={CustomInput} type="checkbox" name="customCheckbox"
                                                         label="Check out this custom input checkbox" required/>

                                                <AvField tag={CustomInput} type="checkbox" name="customCheckbox1"
                                                         label="Check out this custom input checkbox from AvField"
                                                         required/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Button size="lg" className="mt-3" color="primary">Click for
                                                    Validate</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </CardBody>
                        </Card>
                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}