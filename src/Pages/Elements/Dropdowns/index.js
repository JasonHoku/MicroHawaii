import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Dropdown Examples

import DropdownStyles from './Examples/DropdownStyles';
import DropdownGridMenus from './Examples/DropdownGridMenus';

export default class DropdownExamples extends React.Component {

    render() {

        return (
            <Fragment>
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <PageTitle  heading="Dropdowns"
                        subheading="Multiple styles, actions and effects are available for the ArchitectUI dropdown buttons."
                        icon="pe-7s-umbrella icon-gradient bg-sunny-morning"/>
                    <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}>
                        <TabPane tab='Advanced Menus' key="1"><DropdownGridMenus/></TabPane>
                        <TabPane tab='Regular Dropdowns' key="2"><DropdownStyles/></TabPane>
                    </Tabs>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
