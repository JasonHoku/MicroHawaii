import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import {DropdownList} from 'react-widgets'

class FormDropdownSelectBasic extends React.Component {

    render() {
        let colors = ['orange', 'red', 'blue', 'green', 'cyan', 'purple']

        return (
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <Row>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <Row form>
                                        <Col md={12}>
                                            <DropdownList data={colors} defaultValue={"orange"} disabled={["red", "purple"]}/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Disabled</CardTitle>
                                    <Row form>
                                        <Col md={12}>
                                            <DropdownList  data={colors} defaultValue={"orange"} disabled/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Dropup</CardTitle>
                                    <Row form>
                                        <Col md={12}>
                                            <DropdownList dropUp
                                                data={[
                                                    'orange',
                                                    'red',
                                                    'blue',
                                                    'purple'
                                                ]}/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default FormDropdownSelectBasic;