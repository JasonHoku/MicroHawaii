import React, { Fragment } from "react";

import { Elastic } from "react-burgers";

import PerfectScrollbar from "react-perfect-scrollbar";

import Drawer from "react-motion-drawer";

class HeaderRightDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      openLeft: false,
      openRight: false,
      relativeWidth: false,
      width: 450,
      noTouchOpen: false,
      noTouchClose: false,
    };
  }

  render() {
    const { openRight } = this.state;

    return (
      <Fragment>
        <Drawer right className="drawer-content-wrapper p-0" width={450} open={openRight}
          onChange={(open) => this.setState({ openRight: open })} noTouchOpen={false} noTouchClose={false}>
          <PerfectScrollbar>
            <div className="drawer-nav-btn">
              <Elastic width={26} lineHeight={2} lineSpacing={5}
                color="#6c757d" padding="5px" active={this.state.active}
                onClick={() =>
                  this.setState({
                    openRight: false,
                    openLeft: false,
                    active: this.state.active,
                  })
                }/>
            </div>
          </PerfectScrollbar>
        </Drawer>
    
      </Fragment>
    );
  }
}

export default HeaderRightDrawer;
