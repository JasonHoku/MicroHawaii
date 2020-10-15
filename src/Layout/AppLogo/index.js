import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Slider } from "react-burgers";


import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 12,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {

    let clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth)
let logoWidth = null;
let galleryPos =  (clientWidth );

let mobileVar = null;

if(clientWidth <= "800"  ){
  logoWidth = clientWidth * -.15;
 galleryPos =  25;
 mobileVar = 3000;
} if(clientWidth >= "800" && clientWidth <= "1400"  ){

  logoWidth = clientWidth * 0.4;
 galleryPos =  100 ;
}  if(clientWidth > "1400"  ){
  
 mobileVar = 0;
  logoWidth = clientWidth * 0.2;
 galleryPos =   String((clientWidth / 6 )) ;

}


    return (
      <Fragment>
        <div> </div>
        <span className="app-header__logo"   >
          <span className="slideClass"    style=
        {{
            position: "fixed",
            top:15, 
                left: mobileVar,
                
  zIndex: 10,
              
          
          }
        }

 >
            <span onClick={this.toggleEnableClosedSidebar}>
              <Slider width={55} lineHeight={6} lineSpacing={13} color="#ffffff"
                active={this.state.active} onClick={() => this.setState({ active: !this.state.active })}/>
           </span>
         
</span>
        </span>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
