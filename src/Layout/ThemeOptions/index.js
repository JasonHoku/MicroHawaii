import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import {
    Button, ListGroup, ListGroupItem, ButtonGroup,
    UncontrolledTooltip
} from 'reactstrap';

import {
    setBackgroundColor,
    setColorScheme,
    setBackgroundImage,
    setBackgroundImageOpacity,
    setEnableBackgroundImage,
    setEnableFixedHeader,
    setEnableHeaderShadow,
    setEnableSidebarShadow,
    setEnableFixedSidebar,
    setEnableFixedFooter,
    setHeaderBackgroundColor,
    setEnablePageTitleSubheading,
    setEnablePageTabsAlt,
    setEnablePageTitleIcon,
} from '../../reducers/ThemeOptions';

import sideBar1 from '../../assets/utils/images/sidebar/abstract1.jpg';
import sideBar2 from '../../assets/utils/images/sidebar/abstract2.jpg';
import sideBar3 from '../../assets/utils/images/sidebar/abstract3.jpg';
import sideBar4 from '../../assets/utils/images/sidebar/abstract4.jpg';
import sideBar5 from '../../assets/utils/images/sidebar/abstract5.jpg';

import sideBar6 from '../../assets/utils/images/sidebar/city1.jpg';
import sideBar7 from '../../assets/utils/images/sidebar/city2.jpg';
import sideBar8 from '../../assets/utils/images/sidebar/city3.jpg';
import sideBar9 from '../../assets/utils/images/sidebar/city4.jpg';
import sideBar10 from '../../assets/utils/images/sidebar/city5.jpg';

import PerfectScrollbar from 'react-perfect-scrollbar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faCog,
    faCheck
} from '@fortawesome/free-solid-svg-icons'

class ThemeOptions extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };

    }

    

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    state = {
        showing: false
    };

    toggleEnableBackgroundImage = () => {
        let {enableBackgroundImage, setEnableBackgroundImage} = this.props;
        setEnableBackgroundImage(!enableBackgroundImage);
    }

    toggleEnableFixedHeader = () => {
        let {enableFixedHeader, setEnableFixedHeader} = this.props;
        setEnableFixedHeader(!enableFixedHeader);
    }

    toggleEnableHeaderShadow = () => {
        let {enableHeaderShadow, setEnableHeaderShadow} = this.props;
        setEnableHeaderShadow(!enableHeaderShadow);
    }

    toggleEnableSidebarShadow = () => {
        let {enableSidebarShadow, setEnableSidebarShadow} = this.props;
        setEnableSidebarShadow(!enableSidebarShadow);
    }

    toggleEnableFixedSidebar = () => {
        let {enableFixedSidebar, setEnableFixedSidebar} = this.props;
        setEnableFixedSidebar(!enableFixedSidebar);
    }

    toggleEnablePageTitleIcon = () => {
        let {enablePageTitleIcon, setEnablePageTitleIcon} = this.props;
        setEnablePageTitleIcon(!enablePageTitleIcon);
    }

    toggleEnablePageTitleSubheading = () => {
        let {enablePageTitleSubheading, setEnablePageTitleSubheading} = this.props;
        setEnablePageTitleSubheading(!enablePageTitleSubheading);
    }

    toggleEnablePageTabsAlt = () => {
        let {enablePageTabsAlt, setEnablePageTabsAlt} = this.props;
        setEnablePageTabsAlt(!enablePageTabsAlt);
    }

    toggleEnableFixedFooter = () => {
        let {enableFixedFooter, setEnableFixedFooter} = this.props;
        setEnableFixedFooter(!enableFixedFooter);
    }

    render() {
        let {
            backgroundColor,
            setBackgroundColor,

            headerBackgroundColor,
            setHeaderBackgroundColor,

            colorScheme,
            setColorScheme,

            backgroundImageOpacity,
            setBackgroundImageOpacity,

            enableFixedHeader,
            enableHeaderShadow,
            enableSidebarShadow,
            enableFixedSidebar,
            enableFixedFooter,

            enablePageTitleIcon,
            enablePageTitleSubheading,
            enablePageTabsAlt,

            enableBackgroundImage,
            backgroundImage,
            setBackgroundImage,

        } = this.props;

        const {showing} = this.state;

        return (
         null
        );
    }
}

const mapStateToProps = state => ({
    backgroundColor: state.ThemeOptions.backgroundColor,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,

    colorScheme: state.ThemeOptions.colorScheme,

    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,


    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,

    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    backgroundImage: state.ThemeOptions.backgroundImage,

    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity
});

const mapDispatchToProps = dispatch => ({
    setEnableBackgroundImage: enable => dispatch(setEnableBackgroundImage(enable)),

    setEnableFixedHeader: enable => dispatch(setEnableFixedHeader(enable)),
    setEnableHeaderShadow: enable => dispatch(setEnableHeaderShadow(enable)),
    setEnableSidebarShadow: enable => dispatch(setEnableSidebarShadow(enable)),
    setEnableFixedFooter: enable => dispatch(setEnableFixedFooter(enable)),
    setEnableFixedSidebar: enable => dispatch(setEnableFixedSidebar(enable)),

    setEnablePageTitleIcon: enable => dispatch(setEnablePageTitleIcon(enable)),
    setEnablePageTitleSubheading: enable => dispatch(setEnablePageTitleSubheading(enable)),
    setEnablePageTabsAlt: enable => dispatch(setEnablePageTabsAlt(enable)),

    setBackgroundImage: image => dispatch(setBackgroundImage(image)),

    setColorScheme: color => dispatch(setColorScheme(color)),

    setBackgroundColor: color => dispatch(setBackgroundColor(color)),

    setHeaderBackgroundColor: color => dispatch(setHeaderBackgroundColor(color)),

    setBackgroundImageOpacity: color => dispatch(setBackgroundImageOpacity(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeOptions);
