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
        <div
          className={cx("search-wrapper", {
            active: this.state.activeSearch,
          })}
        >
          <div className="input-holder">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/search?sxsrf=ALeKk00y6wanXe9Uja28ODHluomUP_KdfQ%3A1608846432873&ei=YAzlX_bXNJbd-gTqhZqIAg&q=site%3Amicrohawaii.com&oq=site%3Amicrohawaii.com&gs_lcp=CgZwc3ktYWIQA1CKVVjRV2CxWGgBcAB4AIABd4gB0AKSAQMwLjOYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwj2h4SBzOftAhWWrp4KHeqCBiEQ4dUDCA0&uact=5"
            >
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
              />
              <button className="search-icon">
                <span />
              </button>
            </a>
          </div>
          <button
            onClick={() =>
              this.setState({ activeSearch: !this.state.activeSearch })
            }
            className="close"
          />
        </div>
      </Fragment>
    );
  }
}

export default SearchBox;
