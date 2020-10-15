import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import ButtonsSquareSolid from './Examples/Solid';
import ButtonsSquareOutline from './Examples/Outline';
import ButtonsSquareOutline2x from './Examples/Outline2x';
import ButtonsSquareDashed from './Examples/Dashed';
import ButtonsSquareGradients from './Examples/Gradients';

export default class ButtonsSquare extends React.Component {

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
                    <PageTitle
                        heading="Square Buttons"
                        subheading="Wide selection of buttons with square corners. Their styling can be added to any button combination."
                        icon="pe-7s-car icon-gradient bg-mean-fruit"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Solid' key="1"><ButtonsSquareSolid/></TabPane>
                        <TabPane tab='Outline' key="2"><ButtonsSquareOutline/></TabPane>
                        <TabPane tab='Outline 2x' key="3"><ButtonsSquareOutline2x/></TabPane>
                        <TabPane tab='Dashed' key="4"><ButtonsSquareDashed/></TabPane>
                        <TabPane tab='Gradients' key="5"><ButtonsSquareGradients/></TabPane>
                    </Tabs>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
