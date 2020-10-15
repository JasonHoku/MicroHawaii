import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import TimelineDotBadge from './Examples/DotBadge';
import TimelineIconBadge from './Examples/IconBadge';
import TimelineScrollable from './Examples/ScrollableTimeline';

export default class TimelineExample extends React.Component {

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
                        heading="Timelines"
                        subheading="Timelines are used to show lists of notifications, tasks or actions in a beautiful way."
                        icon="pe-7s-light icon-gradient bg-malibu-beach"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Dot Badges' key="1"><TimelineDotBadge/></TabPane>
                        <TabPane tab='Icon Badges' key="2"><TimelineIconBadge/></TabPane>
                        <TabPane tab='Scrollable Timelines' key="3"><TimelineScrollable/></TabPane>
                    </Tabs>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
