import React, { Fragment } from "react";

import cx from "classnames";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearch: false,
    };
  }

  render() {
    return (
      <Fragment>

        <div className={cx("search-wrapper", {
            active: this.state.activeSearch,
          })}>
          <div className="input-holder">
            <a target="_blank" href="https://duckduckgo.com/?q=site%3AFazadAzad.com&t=hw&ia=web">
            <input type="text" className="search-input" placeholder="Type to search"/>
            <button 
              className="search-icon">
              <span />
            </button></a>
          </div>      
       <button onClick={() =>
              this.setState({ activeSearch: !this.state.activeSearch })
            }
            className="close"/>
     </div>
      </Fragment>
    );
  }
}

export default SearchBox;
