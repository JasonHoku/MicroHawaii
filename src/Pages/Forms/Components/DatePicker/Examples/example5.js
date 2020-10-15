import React, { Fragment } from "react";

import DatePicker from "react-datepicker";
//import addDays from "date-fns/add_days";

class FormDatePicker5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <Fragment>
 
      </Fragment>
    );
  }
}

export default FormDatePicker5;
