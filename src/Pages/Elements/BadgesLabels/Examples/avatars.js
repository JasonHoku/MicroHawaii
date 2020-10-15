import React, {Component, Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Container
} from 'reactstrap';

import avatar1 from '../../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../../assets/utils/images/avatars/4.jpg';
import avatar5 from '../../../../assets/utils/images/avatars/5.jpg';
import avatar6 from '../../../../assets/utils/images/avatars/8.jpg';
import avatar7 from '../../../../assets/utils/images/avatars/9.jpg';
import avatar8 from '../../../../assets/utils/images/avatars/10.jpg';

class AvatarsExamples extends Component {

    render() {
        return (
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <Container fluid>
                        <Row>
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Basic Avatars</CardTitle>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Link Avatars</CardTitle>
                                        <div>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="avatar-icon-wrapper">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="divider"/>
                                        <b>Hover Shine</b>
                                        <div>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-xl">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-lg">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-sm">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-xs">
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </a>
                                            <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}
                                               className="avatar-icon-wrapper btn-hover-shine avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </a>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Badges Avatars</CardTitle>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-primary badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-focus badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-warning badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-danger badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-info badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-success badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-secondary badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-warning badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-warning badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-primary badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-success badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-danger badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-info badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-focus badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-primary badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-alternate badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-primary badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-focus badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-warning badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-danger badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-info badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-success badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-secondary badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div
                                                    className="badge badge-bottom badge-warning badge-dot badge-dot-lg"/>
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-warning badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-primary badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-success badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-danger badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-info badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-focus badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-primary badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="badge badge-bottom badge-alternate badge-dot"/>
                                                <div className="avatar-icon rounded">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Overlapping Avatars</CardTitle>
                                        <div className="avatar-wrapper avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-add avatar-icon-xl">
                                                <div className="avatar-icon">
                                                    <i>+</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div className="avatar-wrapper avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-add avatar-icon-lg">
                                                <div className="avatar-icon">
                                                    <i>+</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div className="avatar-wrapper avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-add">
                                                <div className="avatar-icon">
                                                    <i>+</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div className="avatar-wrapper avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-add avatar-icon-sm">
                                                <div className="avatar-icon">
                                                    <i>+</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"/>
                                        <div className="avatar-wrapper avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar3} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar5} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar7} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <img src={avatar8} alt=""/>
                                                </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-add avatar-icon-xs">
                                                <div className="avatar-icon">
                                                    <i>+</i>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
};

export default AvatarsExamples;
