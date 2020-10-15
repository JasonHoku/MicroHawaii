import React, { Fragment } from "react";
import cx from "classnames";


import { connect } from "react-redux";

import AppMobileMenu from "../AppMobileMenu";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import logo2 from "../../assets/images/logo2.png"; // gives image path

import HeaderLogo from "../AppLogo";

let clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth)
let logoWidth = null;
let galleryPos =  (clientWidth );

if(clientWidth <= "800"  ){
  logoWidth = clientWidth * 0.5;
 galleryPos =  25;
} if(clientWidth > "800" && clientWidth <= "1400"  ){

  logoWidth = clientWidth * 0.4;
 galleryPos =  100 ;
}  if(clientWidth > "1400"  ){
  
  logoWidth = clientWidth * 0.4;
 galleryPos = 650;

}




class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>

   <HeaderLogo />  
   <AppMobileMenu />

   <div> <p> </p></div>
          
   <span  style={{
              fontSize: "large",
              color: "white",
              position: "relative",
              textAlign: "left",
              top: -30,
              left:  galleryPos,
              
              opacity: 100,
            }}  class="center">

<span class="logoFont"> 
            <br /> <small>Micro</small>Hawaii</span>
<br />
        </span>
           
           <span 
            style={{
              fontSize: "large",
              color: "white",
              position: "relative",
              textAlign: "left",
              top: 55,
              left: clientWidth * .1,
              opacity: 100,
            }} > 
        
            <br />   
            <br />   
          </span>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
