import React, { Component } from "react";
import PropTypes from "prop-types";

class SizeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      size:[ this.props.productSize ],
    };
    };


    componentDidMount() {
      this.setState({
        size: [
          this.props.productSize 
        ]
      });
    }
  


  render () {
    const { size } = this.state;

    let productSize = size.length > 0
    	&& size.map((item, i) => {
      return (
        <option key={i} value={item.size}>{item.name}</option> 
      )
    }, this);


    return (
      <div>

      </div>
    );
  }
}

SizeCounter.propTypes = {
  size: PropTypes.number
};

export default SizeCounter;
