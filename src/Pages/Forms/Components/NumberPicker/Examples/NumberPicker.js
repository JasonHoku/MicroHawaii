import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import simpleNumberLocalizer from 'react-widgets-simple-number';
import NumberPicker from 'react-widgets/lib/NumberPicker';

simpleNumberLocalizer()

export default class FormNumberPicker extends React.Component {

    render() {

        return (
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <Row>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <NumberPicker />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Disabled</CardTitle>
                                    <NumberPicker disabled defaultValue={1}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Min/Max Value</CardTitle>
                                    <NumberPicker min={5} defaultValue={10} max={15}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Steps</CardTitle>
                                    <NumberPicker step={15}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}